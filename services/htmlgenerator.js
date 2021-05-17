const showdown = require('showdown'),
  htmlGenerator = (markdownContent) => {
    (converter = new showdown.Converter()),
      (htmlContent = converter.makeHtml(markdownContent));
    return htmlContent;
  };

module.exports = htmlGenerator;
