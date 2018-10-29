module.exports = function getHTML(options, callback) {
  var https = require('https');
  var html = '';
  function printHTML(html) {
    console.log(html);
  }
  var options = {
    host: "sytantris.github.io",
    path: "/http-examples/step4.html"
  };

  function getHTML(options, callback) {
    https.get(options, function (response) {
      response.setEncoding('utf8');
      response.on('data', function (data) {
        html += data;
      });
      response.on('end', function () {
        callback(html);
      });
    });
  }
  getHTML(options, printHTML);
}

