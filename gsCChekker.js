async function gscVerification() {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.oponeo.pl/artykul/abc-wulkanizacji');
    const GSC = await page.$("meta[name='google-site-verification']");
    const isGSC = (GSC === null) ? false : true;
    browser.close();
    //console.log(isGSC);
    return Promise.resolve(isGSC);
}

const x = gscVerification();
x.then((resolve) => {
     if(resolve) {
        console.log('Prawda');
     } else {
        console.log("Nie prawda");
     }
})

//https://www.tani-host.com                             To ma GSC
//https://www.oponeo.pl/artykul/abc-wulkanizacji        To nie ma


            // const response = xhr.responseXML;
            // const allMetaTags = response.querySelectorAll('meta');
            
            // for(let i = 0; i < allMetaTags.length; i++) {
            //     if(allMetaTags[i].name === gsc) {
            //         gscInstalled = true;
            //         break;
            //     }
            // }

            // if(gscInstalled) {
            //     answerValue.className = 'gscInstalled';
            //     answerValue.innerHTML = `Strona o podanym linku (${url}) posiada Google Search Console Tool.`;
            // } else {
            //     answerValue.className = 'gscNotInstalled';
            //     answerValue.innerHTML = `Strona o podanym linku (${url}) nie posiada Google Search Console Tool.`;
            // }

            // answerContainer.append(answerValue);
            // mainContent.append(answerContainer);
  