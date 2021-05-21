const express = require('express');
const app = express();
const path = require('path');
const { readFileSync } = require('fs');
const port = 3000;
const { recursiveRoutes } = require('./services/routegenerator');
const htmlGenerator = require('./services/htmlgenerator');

const folders = recursiveRoutes('./content');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (_req, res) => {
  res.render('template', { content: '<h1>Acme Co CMS</h1>' });
});

folders.forEach((route) => {
  let content;
  try {
    content = readFileSync(
      __dirname + '/content/' + route + '/index.md',
      'utf8'
    );
  } catch (error) {
    console.log(error);
  }
  app.get(`${route}`, function (_req, res) {
    res.render('template', { content: htmlGenerator(content) });
  });
});

app.use(function (req, res) {
  res.status(404).render('404', { missingUrl: req.originalUrl });
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;
