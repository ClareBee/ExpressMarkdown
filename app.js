const express = require('express');
const app = express();
const port = 3000;
const getRoutes = require('./services/routegenerator');

getRoutes(__dirname + '/content');

app.use(express.static('/public/'));

app.get('/', (req, res) => {
  res.send('Hello World!');
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
