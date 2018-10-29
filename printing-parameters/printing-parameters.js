var https = require('https');
var options = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {
  var dataOutput = '';
  https.get(options, function (response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
      console.log(data);
    });
    response.on('end', function () {
      console.log('response ended.');
    });
  });
}

getAndPrintHTML(options);