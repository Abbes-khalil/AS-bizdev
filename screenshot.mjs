import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate to the local server
  await page.goto('http://localhost:3000');

  // Wait for page to load and animations to potentially trigger
  await new Promise(resolve => setTimeout(resolve, 3000));

  // Take screenshot
  await page.screenshot({ path: './temporary screenshots/screenshot-1.png' });

  console.log('Screenshot saved to ./temporary screenshots/screenshot-1.png');

  await browser.close();
})();
