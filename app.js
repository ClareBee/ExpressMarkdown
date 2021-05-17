const express = require('express');
const app = express();
const port = 3000;
const { getRoutes, recursiveRoutes } = require('./services/routegenerator');

getRoutes(__dirname + '/content');
const folders = recursiveRoutes('./content');
console.log(folders);

app.use(express.static('/public/'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

folders.forEach((route) => {
  app.get(`${route}`, function (req, res, next) {
    res.send('template');
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
