const express = require('express');
const app = express();
const port = 3000;
const { getRoutes, recursiveRoutes } = require('./services/routegenerator');
const htmlGenerator = require('./services/htmlgenerator');

getRoutes(__dirname + '/content');
const folders = recursiveRoutes('./content');

const content = htmlGenerator('# hello, markdown!');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('/public/'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

folders.forEach((route) => {
  app.get(`${route}`, function (req, res, next) {
    res.render('template', { content: '<h1>Is this working?</h1>' });
  });
});

app.get('/example', function (req, res) {
  res.send('template');
});

app.use(function (req, res, next) {
  res.status(404).render('404', { missingUrl: req.originalUrl });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
