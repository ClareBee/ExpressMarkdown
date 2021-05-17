const express = require('express');
const app = express();
const { readFileSync } = require('fs');
const port = 3000;
const { getRoutes, recursiveRoutes } = require('./services/routegenerator');
const htmlGenerator = require('./services/htmlgenerator');

getRoutes(__dirname + '/content');
const folders = recursiveRoutes('./content');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static('/public/'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

folders.forEach((route) => {
  let content;
  try {
    content = readFileSync(__dirname + route + '/index.md', 'utf8');
  } catch (e) {
    console.log(error);
  }
  app.get(`${route}`, function (req, res, next) {
    res.render('template', { content: htmlGenerator(content) });
  });
});

app.get('/example', function (req, res) {
  res.send('template');
});

app.use(function (req, res, next) {
  res.status(404).render('404', { missingUrl: req.originalUrl });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
