const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/usr/bin/google-chrome-stable',
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu', '--disable-dev-shm-usage']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  // Login
  await page.goto('https://app.aiseo.ai/login', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 2000));
  await page.focus('#email');
  await page.keyboard.type('michael@primemarketingexperts.com', { delay: 15 });
  await page.focus('#password');
  await page.keyboard.type('Cherokee6490%%', { delay: 15 });
  await new Promise(r => setTimeout(r, 500));
  await page.keyboard.press('Enter');
  await new Promise(r => setTimeout(r, 5000));

  // Force navigate to dashboard (auth token should be in localStorage/cookies now)
  console.log('Force navigating to dashboard...');
  await page.goto('https://app.aiseo.ai/dashboard', { waitUntil: 'networkidle2', timeout: 30000 });
  await new Promise(r => setTimeout(r, 3000));

  console.log('URL after dashboard nav:', page.url());
  console.log('Title:', await page.title());

  if (page.url().includes('login')) {
    console.log('Still on login, trying reload...');
    await page.reload({ waitUntil: 'networkidle2' });
    await new Promise(r => setTimeout(r, 3000));
    console.log('After reload URL:', page.url());
  }

  // Take dashboard screenshot
  await page.screenshot({ path: '/tmp/aiseo-dashboard2.png', fullPage: false });

  if (page.url().includes('dashboard')) {
    console.log('On dashboard! Finding tools...');

    // Get the page body for tool exploration
    const bodyText = await page.evaluate(() => document.body.innerText.substring(0, 1000));
    console.log('Body preview:', bodyText.substring(0, 400));

    // Click on "humanize ai" tool card
    const allClickable = await page.$$('button, a, [role="button"], div[class*="card"]');
    for (const el of allClickable) {
      const text = await page.evaluate(e => (e.innerText || '').substring(0, 30).trim().toLowerCase(), el);
      if (text.includes('humanize')) {
        console.log('\nClicking element with text:', text);
        await el.click();
        await new Promise(r => setTimeout(r, 5000));
        console.log('After click URL:', page.url());
        await page.screenshot({ path: '/tmp/aiseo-humanize-page.png', fullPage: true });

        // Check for textareas
        const textareas = await page.$$('textarea');
        console.log('Textareas found:', textareas.length);

        if (textareas.length > 0) {
          // Try pasting test content
          const testContent = 'We help businesses get more leads and save time with smart marketing tools. From AI chatbots to ad campaigns, we build systems that work around the clock. Your funnel stays full so you can focus on closing deals. It is like a sales team that never takes a break. No complicated jargon, just results that grow your bottom line.';

          await page.evaluate((t) => {
            const ta = document.querySelector('textarea');
            if (ta) {
              const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set;
              setter.call(ta, t);
              ta.dispatchEvent(new Event('input', { bubbles: true }));
              ta.dispatchEvent(new Event('change', { bubbles: true }));
            }
          }, testContent);

          await new Promise(r => setTimeout(r, 1000));

          // Click humanize button
          const btns = await page.$$('button');
          for (const btn of btns) {
            const btnText = await page.evaluate(b => b.innerText.toLowerCase().trim(), btn);
            if (btnText.includes('humanize') || btnText.includes('detect') || btnText.includes('check')) {
              console.log('Clicking button:', btnText);
              await btn.click();
              break;
            }
          }

          // Wait for result
          console.log('Waiting for result...');
          await new Promise(r => setTimeout(r, 20000));

          await page.screenshot({ path: '/tmp/aiseo-humanize-result.png', fullPage: true });

          const resultText = await page.evaluate(() => document.body.innerText.substring(0, 2000));
          console.log('Result text:', resultText.substring(0, 800));
        }
        break;
      }
    }
  }

  await browser.close();
})();
