#!/usr/bin/env node
/**
 * AISEO AI Detection & Humanization Pipeline v2
 *
 * Automated process that:
 * 1. Fetches text content from every page of both Netlify sites
 * 2. Chunks content and checks via AISEO.ai free AI Detector
 * 3. Generates a pass/fail report for every page
 * 4. If content fails, runs it through AISEO Humanizer
 * 5. Outputs humanized replacement text
 *
 * Usage:
 *   node scripts/aiseo-pipeline.js
 *   node scripts/aiseo-pipeline.js --detect-only
 *   node scripts/aiseo-pipeline.js --site main
 *   node scripts/aiseo-pipeline.js --site enhanced
 */

const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── Configuration ──────────────────────────────────────────────────
const CONFIG = {
  aiseo: {
    email: process.env.AISEO_EMAIL || 'michael@primemarketingexperts.com',
    password: process.env.AISEO_PASSWORD || 'Cherokee6490%%',
    detectorUrl: 'https://aiseo.ai/tools/ai-detector',
    humanizerUrl: 'https://aiseo.ai/humanize-ai',
  },
  chrome: {
    executablePath: '/usr/bin/google-chrome-stable',
    headless: 'new',
    args: [
      '--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu',
      '--window-size=1280,800', '--disable-dev-shm-usage',
      '--disable-web-security', '--disable-features=VizDisplayCompositor',
    ],
  },
  sites: {
    main: {
      name: 'AMP Marketing (Main)',
      baseUrl: 'https://melodic-travesseiro-f5ef27.netlify.app',
      pages: [
        '/', '/about', '/pricing', '/contact', '/blog',
        '/services', '/services/ai-chatbot', '/services/ai-voice',
        '/services/lead-funnel', '/services/seo-content',
        '/services/landing-pages', '/services/email-automation',
        '/services/social-media', '/services/ad-copy',
        '/services/google-business', '/services/review-response',
      ],
    },
    enhanced: {
      name: 'AMP Marketing (Enhanced UX)',
      baseUrl: 'https://melodic-flow-enhanced-ux.netlify.app',
      pages: [
        '/', '/about', '/pricing', '/contact', '/blog',
        '/services', '/services/ai-chatbot', '/services/ai-voice',
        '/services/lead-funnel', '/services/seo-content',
        '/services/landing-pages', '/services/email-automation',
        '/services/social-media', '/services/ad-copy',
        '/services/google-business', '/services/review-response',
      ],
    },
  },
  chunkSize: 2000,      // Max chars per chunk
  aiThreshold: 20,      // Fail if AI score > this %
  delayBetweenChecks: 5000,
  outputDir: path.join(__dirname, 'aiseo-reports'),
};

// ── Helpers ────────────────────────────────────────────────────────
function log(msg, level = 'info') {
  const icons = { info: '  ', warn: '!!', error: 'XX', ok: 'OK', step: '>>' };
  const ts = new Date().toLocaleTimeString();
  console.log(`[${icons[level] || '  '}] [${ts}] ${msg}`);
}

function chunkText(text, maxLen) {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks = [];
  let current = '';
  for (const sentence of sentences) {
    if ((current + ' ' + sentence).trim().length > maxLen && current.length > 0) {
      chunks.push(current.trim());
      current = sentence;
    } else {
      current = (current + ' ' + sentence).trim();
    }
  }
  if (current.trim().length > 30) chunks.push(current.trim());
  return chunks;
}

// ── Extract page content from live URL ─────────────────────────────
async function extractPageContent(browser, url) {
  let page;
  try {
    page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

    const content = await page.evaluate(() => {
      ['nav', 'footer', 'script', 'style', 'noscript', '[aria-hidden="true"]', '.sr-only']
        .forEach(sel => document.querySelectorAll(sel).forEach(el => el.remove()));

      const main = document.querySelector('main') || document.body;
      const walker = document.createTreeWalker(main, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => {
          const p = node.parentElement;
          if (!p) return NodeFilter.FILTER_REJECT;
          const s = window.getComputedStyle(p);
          if (s.display === 'none' || s.visibility === 'hidden') return NodeFilter.FILTER_REJECT;
          return node.textContent.trim().length > 2 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
        }
      });
      const texts = [];
      let n;
      while (n = walker.nextNode()) {
        const t = n.textContent.trim();
        if (t.length > 2) texts.push(t);
      }
      return texts.join(' ').replace(/\s+/g, ' ').trim();
    });
    return content;
  } catch (err) {
    log(`Failed to extract ${url}: ${err.message}`, 'error');
    return '';
  } finally {
    if (page) await page.close().catch(() => {});
  }
}

// ── Detect AI score using AISEO free detector ──────────────────────
async function detectAI(browser, text) {
  let page;
  try {
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(CONFIG.aiseo.detectorUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    await sleep(3000);

    // Paste content into textarea
    await page.evaluate((t) => {
      const el = document.querySelector('textarea');
      if (el) {
        el.value = t;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, text);
    await sleep(1000);

    // Find and click detect button
    let clicked = false;
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const btnText = await page.evaluate(el => (el.innerText || '').toLowerCase(), btn);
      if (btnText.includes('detect') || btnText.includes('check') || btnText.includes('scan') || btnText.includes('analyz')) {
        await btn.click();
        clicked = true;
        break;
      }
    }
    if (!clicked) {
      // Try clicking any prominent CTA button
      const allBtns = await page.$$('button[class*="primary"], button[class*="btn"], button[class*="cta"]');
      if (allBtns.length > 0) await allBtns[0].click();
      else await page.keyboard.press('Enter');
    }

    // Wait for results
    await sleep(12000);

    // Extract score
    const result = await page.evaluate(() => {
      // Strategy 1: Look for score elements
      const scoreEls = document.querySelectorAll('[class*="score"], [class*="Score"], [class*="percent"], [class*="result"]');
      for (const el of scoreEls) {
        const text = (el.innerText || el.textContent || '').trim();
        const match = text.match(/(\d+)\s*%/);
        if (match) return { score: parseInt(match[1]), raw: text };
      }

      // Strategy 2: Look for percentage in body text
      const bodyText = document.body.innerText;
      // Look for patterns like "92% AI" or "AI: 92%" or "Human: 8%"
      const aiMatch = bodyText.match(/(\d+)\s*%\s*(?:ai|artificial|generated|machine)/i);
      if (aiMatch) return { score: parseInt(aiMatch[1]), raw: aiMatch[0], type: 'ai_direct' };

      const humanMatch = bodyText.match(/(\d+)\s*%\s*(?:human|original|natural)/i);
      if (humanMatch) {
        const humanScore = parseInt(humanMatch[1]);
        return { score: 100 - humanScore, raw: humanMatch[0], type: 'human_inverted' };
      }

      // Strategy 3: Any percentage on page near key words
      const allPercentages = [...bodyText.matchAll(/(\d+)\s*%/g)];
      if (allPercentages.length > 0) {
        // Return the first percentage found in the results area
        return { score: parseInt(allPercentages[0][1]), raw: allPercentages[0][0], type: 'first_percent' };
      }

      return { score: -1, raw: 'No score found', error: true };
    });

    return result;
  } catch (err) {
    log(`  Detection error: ${err.message}`, 'error');
    return { score: -1, error: err.message };
  } finally {
    if (page) await page.close().catch(() => {});
  }
}

// ── Humanize text using AISEO free humanizer ───────────────────────
async function humanizeText(browser, text) {
  let page;
  try {
    page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 900 });
    await page.goto(CONFIG.aiseo.humanizerUrl, { waitUntil: 'networkidle2', timeout: 30000 });
    await sleep(3000);

    // Paste content
    await page.evaluate((t) => {
      const el = document.querySelector('textarea');
      if (el) {
        el.value = t;
        el.dispatchEvent(new Event('input', { bubbles: true }));
        el.dispatchEvent(new Event('change', { bubbles: true }));
      }
    }, text);
    await sleep(1000);

    // Click humanize button
    const buttons = await page.$$('button');
    for (const btn of buttons) {
      const btnText = await page.evaluate(el => (el.innerText || '').toLowerCase(), btn);
      if (btnText.includes('humanize') || btnText.includes('rewrite') || btnText.includes('convert')) {
        await btn.click();
        break;
      }
    }

    // Wait for result
    await sleep(20000);

    // Extract humanized text
    const result = await page.evaluate(() => {
      const textareas = document.querySelectorAll('textarea');
      if (textareas.length > 1) {
        return { humanized: textareas[textareas.length - 1].value };
      }
      const resultDiv = document.querySelector('.result-text, [class*="output"], [class*="result"]');
      if (resultDiv) return { humanized: resultDiv.innerText || resultDiv.textContent };
      return { humanized: '', error: 'Could not find humanized output' };
    });

    return result;
  } catch (err) {
    return { humanized: text, error: err.message };
  } finally {
    if (page) await page.close().catch(() => {});
  }
}

// ── Main Pipeline ──────────────────────────────────────────────────
async function runPipeline() {
  const args = process.argv.slice(2);
  const detectOnly = args.includes('--detect-only');
  const siteFilter = args.includes('--site') ? args[args.indexOf('--site') + 1] : 'all';

  if (!fs.existsSync(CONFIG.outputDir)) fs.mkdirSync(CONFIG.outputDir, { recursive: true });

  log('=== AISEO AI Detection & Humanization Pipeline v2 ===', 'step');
  log(`Mode: ${detectOnly ? 'DETECT ONLY' : 'DETECT + HUMANIZE'}`, 'info');
  log(`Sites: ${siteFilter}`, 'info');
  log(`AI Threshold: ${CONFIG.aiThreshold}%`, 'info');
  log(`Detector: ${CONFIG.aiseo.detectorUrl}`, 'info');

  const browser = await puppeteer.launch({
    executablePath: CONFIG.chrome.executablePath,
    headless: CONFIG.chrome.headless,
    args: CONFIG.chrome.args,
  });

  const report = {
    timestamp: new Date().toISOString(),
    sites: {},
    summary: { total: 0, passed: 0, failed: 0, errors: 0 },
  };

  try {
    const sitesToProcess = siteFilter === 'all'
      ? Object.entries(CONFIG.sites)
      : [[siteFilter, CONFIG.sites[siteFilter]]].filter(([, v]) => v);

    for (const [siteKey, site] of sitesToProcess) {
      log(`\n=== Processing: ${site.name} ===`, 'step');
      report.sites[siteKey] = { name: site.name, pages: {} };

      for (const pagePath of site.pages) {
        const fullUrl = `${site.baseUrl}${pagePath}`;
        const pageName = pagePath === '/' ? 'homepage' : pagePath.replace(/^\//, '').replace(/\//g, '-');

        log(`\nPage: ${fullUrl}`, 'step');
        log('  Extracting text content...', 'info');
        const content = await extractPageContent(browser, fullUrl);

        if (!content || content.length < 50) {
          log(`  Skipping — insufficient content (${content.length} chars)`, 'warn');
          report.sites[siteKey].pages[pageName] = {
            url: fullUrl, status: 'skipped', reason: 'insufficient content', charCount: content.length
          };
          report.summary.total++;
          continue;
        }

        log(`  Extracted ${content.length} chars`, 'info');
        const chunks = chunkText(content, CONFIG.chunkSize);
        log(`  Split into ${chunks.length} chunk(s)`, 'info');

        const pageResult = {
          url: fullUrl,
          charCount: content.length,
          fullContent: content,
          chunks: [],
          overallScore: 0,
          status: 'pending',
        };

        let totalScore = 0;
        let validScores = 0;

        for (let i = 0; i < chunks.length; i++) {
          const chunk = chunks[i];
          log(`  Chunk ${i + 1}/${chunks.length} (${chunk.length} chars)...`, 'info');

          let detection;
          try {
            detection = await detectAI(browser, chunk);
          } catch (err) {
            detection = { score: -1, error: err.message };
          }

          const chunkResult = {
            index: i,
            charCount: chunk.length,
            preview: chunk.substring(0, 100) + '...',
            fullText: chunk,
            aiScore: detection.score,
            raw: detection.raw || '',
          };

          if (detection.score >= 0) {
            totalScore += detection.score;
            validScores++;
            const status = detection.score <= CONFIG.aiThreshold ? 'PASS' : 'FAIL';
            log(`  -> AI Score: ${detection.score}% [${status}]`, detection.score <= CONFIG.aiThreshold ? 'ok' : 'error');
          } else {
            log(`  -> Could not determine score`, 'warn');
            chunkResult.error = detection.error;
          }

          // Humanize if needed
          if (!detectOnly && detection.score > CONFIG.aiThreshold) {
            log(`  Humanizing chunk ${i + 1}...`, 'step');
            try {
              const humanized = await humanizeText(browser, chunk);
              chunkResult.humanized = humanized.humanized;
              if (humanized.error) chunkResult.humanizeError = humanized.error;
            } catch (err) {
              chunkResult.humanizeError = err.message;
            }
          }

          pageResult.chunks.push(chunkResult);

          // Rate limit delay
          if (i < chunks.length - 1) await sleep(CONFIG.delayBetweenChecks);
        }

        // Calculate overall
        pageResult.overallScore = validScores > 0 ? Math.round(totalScore / validScores) : -1;
        pageResult.status = pageResult.overallScore < 0 ? 'error'
          : pageResult.overallScore <= CONFIG.aiThreshold ? 'PASS' : 'FAIL';

        report.sites[siteKey].pages[pageName] = pageResult;
        report.summary.total++;

        if (pageResult.status === 'PASS') report.summary.passed++;
        else if (pageResult.status === 'FAIL') report.summary.failed++;
        else report.summary.errors++;

        log(`  OVERALL: ${pageResult.overallScore}% AI [${pageResult.status}]`,
          pageResult.status === 'PASS' ? 'ok' : 'error');

        // Brief pause between pages
        await sleep(2000);
      }
    }
  } catch (err) {
    log(`Pipeline error: ${err.message}`, 'error');
    report.error = err.message;
  } finally {
    await browser.close().catch(() => {});
  }

  // ── Generate Reports ──────────────────────────────────────────
  const ts = Date.now();
  const reportPath = path.join(CONFIG.outputDir, `aiseo-report-${ts}.json`);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

  // Print summary table
  console.log('\n' + '='.repeat(70));
  console.log('  AISEO AI DETECTION REPORT');
  console.log('='.repeat(70));
  console.log(`  Date:   ${report.timestamp}`);
  console.log(`  Total:  ${report.summary.total} pages`);
  console.log(`  Passed: ${report.summary.passed}`);
  console.log(`  Failed: ${report.summary.failed}`);
  console.log(`  Errors: ${report.summary.errors}`);
  console.log('='.repeat(70));

  for (const [, site] of Object.entries(report.sites)) {
    console.log(`\n  ${site.name}`);
    console.log('  ' + '-'.repeat(55));
    for (const [pageName, pr] of Object.entries(site.pages)) {
      const icon = pr.status === 'PASS' ? 'PASS' : pr.status === 'FAIL' ? 'FAIL' : 'SKIP';
      const score = pr.overallScore >= 0 ? `${pr.overallScore}%` : 'N/A';
      console.log(`  [${icon}]  ${pageName.padEnd(35)} ${score.padStart(5)} AI`);
    }
  }

  console.log('\n' + '='.repeat(70));
  console.log(`  Full report: ${reportPath}`);

  // Collect humanized content
  const humanizedChunks = [];
  for (const site of Object.values(report.sites)) {
    for (const [pageName, pr] of Object.entries(site.pages)) {
      if (pr.chunks) {
        for (const chunk of pr.chunks) {
          if (chunk.humanized) {
            humanizedChunks.push({
              page: pageName, url: pr.url, chunkIndex: chunk.index,
              original: chunk.fullText, humanized: chunk.humanized,
            });
          }
        }
      }
    }
  }

  if (humanizedChunks.length > 0) {
    const humanizedPath = path.join(CONFIG.outputDir, `humanized-content-${ts}.json`);
    fs.writeFileSync(humanizedPath, JSON.stringify(humanizedChunks, null, 2));
    console.log(`  Humanized: ${humanizedPath}`);
  }

  // Also save content map for reference
  const contentMap = {};
  for (const [siteKey, site] of Object.entries(report.sites)) {
    for (const [pageName, pr] of Object.entries(site.pages)) {
      if (pr.fullContent) {
        contentMap[`${siteKey}/${pageName}`] = {
          url: pr.url, content: pr.fullContent, score: pr.overallScore,
        };
      }
    }
  }
  const contentPath = path.join(CONFIG.outputDir, `content-map-${ts}.json`);
  fs.writeFileSync(contentPath, JSON.stringify(contentMap, null, 2));
  console.log(`  Content map: ${contentPath}`);

  return report;
}

// ── Run ────────────────────────────────────────────────────────────
runPipeline().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
