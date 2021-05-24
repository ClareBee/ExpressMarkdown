const { recursiveRoutes } = require('../services/routegenerator');

const folders = recursiveRoutes('./content');

const getLinks = () => {
  let links = [];
  folders.forEach((route) => {
    links.push(`<li><a href="${route}">${route}</a></li>`);
  });

  return links.join('');
};

module.exports = getLinks;
