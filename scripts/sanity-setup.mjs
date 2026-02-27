import { chromium } from 'playwright';
import { setTimeout } from 'timers/promises';

const EMAIL = 'cgdarkstardev1@pm.me';
const PASS = 'CCGGblog26';
const PID = '36hj0d6k';
const MAIN = 'https://melodic-travesseiro-f5ef27.netlify.app';
const ENH = 'https://melodic-flow-enhanced-ux.netlify.app';

async function ss(p, n) { await p.screenshot({ path: `/tmp/san-${n}.png` }); console.log(`SS: ${n}`); }

async function run() {
  const browser = await chromium.launch({
    executablePath: '/usr/bin/google-chrome',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 900 } });
  const page = await ctx.newPage();

  try {
    // LOGIN
    console.log('=== LOGIN ===');
    await page.goto('https://www.sanity.io/manage', { waitUntil: 'domcontentloaded', timeout: 60000 });
    await setTimeout(5000);

    const emailBtn = page.locator('button:has-text("Sign in with email"), button:has-text("E-mail")');
    if (await emailBtn.count() > 0) { await emailBtn.first().click(); await setTimeout(3000); }

    const em = page.locator('input[type="email"]').first();
    if (await em.count() > 0) await em.fill(EMAIL);
    const pw = page.locator('input[type="password"]').first();
    if (await pw.count() > 0) await pw.fill(PASS);
    const sub = page.locator('button[type="submit"]').first();
    if (await sub.count() > 0) { await sub.click(); await setTimeout(8000); }

    console.log('URL:', page.url());
    const loggedIn = page.url().includes('/manage') && !page.url().includes('/login');
    console.log('Logged in:', loggedIn);
    if (!loggedIn) { console.log('LOGIN FAILED'); await ss(page, 'fail'); await browser.close(); return; }

    // CORS
    console.log('\n=== CORS ===');
    await page.goto(`https://www.sanity.io/manage/project/${PID}/api`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await setTimeout(8000);
    await ss(page, 'cors-page');

    const body = await page.textContent('body');
    console.log('Main CORS:', body?.includes('melodic-travesseiro') ? 'YES' : 'NO');
    console.log('Enhanced CORS:', body?.includes('melodic-flow-enhanced') ? 'YES' : 'NO');
    console.log('Localhost CORS:', body?.includes('localhost') ? 'YES' : 'NO');

    // Add each missing origin
    for (const origin of [MAIN, ENH, 'http://localhost:3000']) {
      const shortName = origin.includes('enhanced') ? 'enhanced' : origin.includes('melodic') ? 'main' : 'localhost';
      const key = origin.replace('https://', '').replace('http://', '').split('.')[0];
      if (body?.includes(key)) { console.log(`Already has: ${shortName}`); continue; }

      console.log(`Adding: ${shortName} (${origin})`);
      const addBtn = page.locator('button:has-text("Add CORS origin")');
      if (await addBtn.count() > 0) {
        await addBtn.first().click();
        await setTimeout(2000);

        const inp = page.locator('input[name="origin"], input[placeholder*="origin" i], dialog input[type="text"], [role="dialog"] input').first();
        if (await inp.count() > 0) {
          await inp.fill(origin);
          await setTimeout(500);

          // Check credentials checkbox
          const chk = page.locator('[role="dialog"] input[type="checkbox"], dialog input[type="checkbox"]');
          if (await chk.count() > 0 && !(await chk.first().isChecked())) {
            await chk.first().check();
          }

          // Click save
          const save = page.locator('[role="dialog"] button:has-text("Save"), [role="dialog"] button:has-text("Add"), dialog button[type="submit"]').first();
          if (await save.count() > 0) {
            await save.click();
            await setTimeout(3000);
            console.log(`Added: ${shortName}`);
          }
        }
      } else {
        console.log('No "Add CORS origin" button. Body snippet:', body?.substring(0, 200));
        break;
      }
    }
    await ss(page, 'cors-done');

    // Verify CORS after adding
    await page.reload({ waitUntil: 'domcontentloaded' });
    await setTimeout(5000);
    const body2 = await page.textContent('body');
    console.log('\nAfter CORS setup:');
    console.log('Main:', body2?.includes('melodic-travesseiro') ? 'YES' : 'NO');
    console.log('Enhanced:', body2?.includes('melodic-flow-enhanced') ? 'YES' : 'NO');

    // STUDIO LOGIN & BLOG POST
    console.log('\n=== STUDIO ===');
    await page.goto(`${MAIN}/studio`, { waitUntil: 'domcontentloaded', timeout: 60000 });
    await setTimeout(8000);
    await ss(page, 'studio');

    let stBody = await page.textContent('body');
    console.log('Studio shows:', stBody?.includes('Choose login') ? 'LOGIN SCREEN' : stBody?.includes('Blog Post') ? 'DESK' : 'OTHER');

    if (stBody?.includes('Choose login') || stBody?.includes('login provider')) {
      console.log('Logging into Studio...');
      const stEmail = page.locator('button:has-text("E-mail"), button:has-text("email")');
      if (await stEmail.count() > 0) {
        await stEmail.first().click();
        await setTimeout(3000);

        const e = page.locator('input[type="email"]').first();
        if (await e.count() > 0) await e.fill(EMAIL);
        const p = page.locator('input[type="password"]').first();
        if (await p.count() > 0) await p.fill(PASS);
        const s = page.locator('button[type="submit"]').first();
        if (await s.count() > 0) { await s.click(); await setTimeout(10000); }
      }
      await ss(page, 'studio-logged');
      console.log('Studio URL:', page.url());
      stBody = await page.textContent('body');
      console.log('Studio after login:', stBody?.substring(0, 300));
    }

    // Navigate to Blog Post type
    console.log('\n=== CREATE POST ===');
    await setTimeout(3000);

    // Try clicking on Blog Post in the desk
    const postLink = page.locator('a:has-text("Blog Post"), [data-ui="MenuItem"]:has-text("Blog Post"), button:has-text("Blog Post")');
    if (await postLink.count() > 0) {
      console.log('Found Blog Post link');
      await postLink.first().click();
      await setTimeout(3000);
      await ss(page, 'post-list');

      // Create new
      const create = page.locator('[aria-label*="Create"], [data-testid="action-intent-button"], button[aria-label*="new"]');
      if (await create.count() > 0) {
        await create.first().click();
        await setTimeout(3000);
      } else {
        // Try the pencil/plus icon
        const plus = page.locator('button:has([data-sanity-icon="add"]), button:has([data-sanity-icon="compose"])');
        if (await plus.count() > 0) { await plus.first().click(); await setTimeout(3000); }
      }
      await ss(page, 'new-post');

      // Fill title
      const title = page.locator('[data-testid="field-title"] input, input').first();
      if (await title.count() > 0) {
        await title.fill('5 AI Marketing Strategies That Actually Work in 2025');
        console.log('Title filled');
        await setTimeout(1000);
      }

      // Generate slug
      const genSlug = page.locator('button:has-text("Generate")');
      if (await genSlug.count() > 0) { await genSlug.first().click(); console.log('Slug generated'); await setTimeout(1000); }

      // Excerpt
      const exc = page.locator('textarea').first();
      if (await exc.count() > 0) {
        await exc.fill('Most businesses waste their AI budget on tools they never use. These five strategies have generated real results for small businesses across dozens of industries.');
        console.log('Excerpt filled');
        await setTimeout(500);
      }

      await ss(page, 'post-filled');

      // Publish
      const pub = page.locator('button:has-text("Publish")');
      if (await pub.count() > 0) {
        await pub.first().click();
        await setTimeout(5000);
        console.log('PUBLISHED!');
        await ss(page, 'published');
      } else {
        console.log('Buttons visible:', (await page.locator('button').allTextContents()).filter(t => t.trim()).slice(0, 20).join(' | '));
      }
    } else {
      console.log('Blog Post link not found. Visible text:', stBody?.substring(0, 500));
    }

  } catch (err) {
    console.error('ERROR:', err.message);
    await ss(page, 'error');
  } finally {
    await browser.close();
    console.log('\nDone');
  }
}

run().catch(console.error);
