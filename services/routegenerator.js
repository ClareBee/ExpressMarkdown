const path = require('path');
const fs = require('fs');

const getRoutes = (srcPath) => {
  const routes = fs
    .readdirSync(srcPath)
    .map((file) => path.join(srcPath, file))
    .filter((path) => fs.statSync(path).isDirectory());
  console.log(routes);
};

module.exports = getRoutes;
