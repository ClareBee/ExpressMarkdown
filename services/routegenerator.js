const path = require('path');
const fs = require('fs');

const getRoutes = (srcPath) => {
  return fs
    .readdirSync(srcPath)
    .map((file) => path.join(srcPath, file))
    .filter((path) => fs.statSync(path).isDirectory());
};

const recursiveRoutes = (srcPath, dirs) => {
  const readDir = fs.readdirSync(srcPath);
  let folder = dirs ? dirs : [];

  readDir.forEach((dirNext) => {
    if (fs.lstatSync(srcPath + '/' + dirNext).isDirectory()) {
      folder = recursiveRoutes(`${srcPath}/${dirNext}`, folder);
    } else {
      folder.push(srcPath.substring(9));
    }
  });
  return folder.filter((dir) => !!dir);
};

module.exports = { getRoutes, recursiveRoutes };
