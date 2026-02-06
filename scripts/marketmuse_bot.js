const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function runMarketMuseAudit(email, password, contentMap) {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  console.log('🚀 Starting MarketMuse Bot...');
  
  await page.goto('https://app.marketmuse.com/login');
  
  await page.fill('input[name="email"]', email);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
  
  await page.waitForURL('**/dashboard**');
  console.log('✅ Logged into MarketMuse');

  const results = {};

  for (const [filePath, text] of Object.entries(contentMap)) {
    console.log(`🔍 Auditing ${filePath}...`);
    
    await page.goto('https://app.marketmuse.com/applications/optimize');
    
    await page.click('button:has-text("New content")');
    await page.fill('textarea[placeholder*="Paste your content"]', text);
    
    const pageTitle = filePath.split('/').pop().replace('.tsx', '');
    await page.fill('input[placeholder="Enter subject"]', pageTitle);
    
    await page.click('button:has-text("Run")');
    
    await page.waitForSelector('.content-score-value', { timeout: 60000 });
    
    const score = await page.innerText('.content-score-value');
    const target = await page.innerText('.target-score-value');
    
    const keywords = await page.$$eval('.keyword-list-item', items => 
      items.slice(0, 10).map(item => ({
        term: item.querySelector('.keyword-term').innerText,
        suggested: item.querySelector('.suggested-count').innerText,
        current: item.querySelector('.current-count').innerText
      }))
    );
    
    results[filePath] = {
      score,
      target,
      topMissingKeywords: keywords.filter(k => parseInt(k.current) === 0)
    };
    
    console.log(`  📊 Score: ${score}/${target}`);
  }

  fs.writeFileSync('marketmuse_audit_report.json', JSON.stringify(results, null, 2));
  console.log('💾 Report saved to marketmuse_audit_report.json');
  
  await browser.close();
}

if (require.main === module) {
  const email = process.env.MARKETMUSE_EMAIL;
  const password = process.env.MARKETMUSE_PASSWORD;
  
  if (!email || !password) {
    console.log('❌ Error: MARKETMUSE_EMAIL and MARKETMUSE_PASSWORD env vars required');
    process.exit(1);
  }
  
  const sampleContent = {
    'src/app/pricing/page.tsx': 'We provide the best AI services with transparent pricing. No hidden fees. Our starter plan includes AI chatbot setup and Google Business optimization.'
  };
  
  runMarketMuseAudit(email, password, sampleContent);
}
