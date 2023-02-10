const port = process.env.PORT || 5000;  
const path = require('path');
const url = require('url');
const express = require('express');
const hbs = require('express-handlebars');
const app = express();

app.engine('hbs', hbs.engine({ extname: 'hbs', layoutDir: './layouts' }));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/result', (req, res) => {
  const gsc = require('./public/gsCChekker.js');
  const checkingSite = url.parse(req.url, true).query;
  const checkURL = checkingSite.checkURL;
  gsc(checkURL).then((isGSC) => {
    res.render('result', { isGSC: isGSC });
  }).catch((error) => {
    console.error(error.message);
    res.render('result', { isError: true })
  });
});

app.listen(port, (err) => {
  if(err) throw err;
  console.log(`Listening at port ${port}`);
});
