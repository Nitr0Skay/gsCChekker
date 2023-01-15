module.exports = async function(url) {
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded'});
    const GSC = await page.$("meta[name='google-site-verification']");
    const isGSC = (GSC === null) ? false : true;
    page.close();
    browser.close();
 
    return Promise.resolve(isGSC);
}


// const prompt = require("prompt-sync")({sigint: true});
// let url = prompt("Please, give the URL of the Site: ");

// const x = gscVerification('https://www.oponeo.pl/artykul/abc-wulkanizacji');
// x.then((resolve) => {
//      if(resolve) {
//         console.log('This site has Google Search Console Tool');
//      } else {
//         console.log('This site probably has not Google Search Console Tool');
//      }
// })

//https://www.tani-host.com                             To ma GSC
//https://www.oponeo.pl/artykul/abc-wulkanizacji        To nie ma





// const http = require('http');
// // const fs = require('fs');
// // const file = fs.createReadStream('./index.html');

// const hostname = '127.0.0.1';
// const port = 5500;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html');
//   res.end(gscVerification(req));
// });

// server.listen(port, hostname, () => {
//   console.log(server.request);
// });


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
  