const http = require('http');
const port = process.env.PORT || 5000;  
const path = require('path');
const fs = require('fs');
const url = require('url');
const indexPath = path.join(__dirname, '/index.html');

http.createServer(async (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    
    if(req.url === '/' && req.method === 'GET') {
        res.end(fs.readFileSync(indexPath));
    } else {
        const query = url.parse(req.url, true).query;
        const json = JSON.stringify(query);
        const u = JSON.parse(json).url;
        const gs = require('./gsCChekker.js');
              gs(u).then(resolve => {
                      if(resolve)   {
                        res.end('This site has Google Search Console Tool');
                      } else {
                        res.end('This site probably has not Google Search Console Tool');
                      }
              });
    }
    // const gs = require('./gsCChekker.js');
    //       gs(queryObject).then((resolve) => {
    //             // if(resolve) {
    //             //     res.end('This site has Google Search Console Tool');
    //             // } else {
    //             //     res.end('This site probably has not Google Search Console Tool');
    //             // }
    //             res.end(req.url);
    //       }).catch((err) => {
    //           res.end
    //       });
}).listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});