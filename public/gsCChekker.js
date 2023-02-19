module.exports = async function(url) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    const GSC = await page.$("meta[name='google-site-verification']");
    const isGSC = (GSC === null) ? false : true;
    await page.close();  
    await browser.close();
 
    return Promise.resolve(isGSC);
}



//Testing....

//https://www.tani-host.com                             To ma GSC
//https://www.oponeo.pl/artykul/abc-wulkanizacji        To nie ma

