const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the local server
  await page.goto('http://localhost:3000');

  // Wait for page to load
  await page.waitForTimeout(2000);

  // Take screenshot
  await page.screenshot({ path: './temporary screenshots/screenshot-1.png' });

  console.log('Screenshot saved to ./temporary screenshots/screenshot-1.png');

  await browser.close();
})();