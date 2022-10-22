const puppeteer = require('puppeteer');

(async () => {
    const broswer = await puppeteer.launch();
    const page = await broswer.newPage();
    await page.setViewport({ width: 1280, height: 720 });
    await page.goto('https://www.nbcnews.com/');
    
    const screenshotBuffer = await page.screenshot({
        path: '../screenshots/test.jpg'
    });
    console.log(screenshotBuffer)

    await page.close();
    await broswer.close();
})();