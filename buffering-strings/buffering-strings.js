var http = require('http');
function getAndPrintHTML() {
    var dataOutput = '';
    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };
    http.get(requestOptions, function(response) {
        response.setEncoding('utf8');
        response.on('data', function(data) {
            if(data) {
                dataOutput += data;
            }
        });
        response.on('end', function() {
          console.log(dataOutput);
        });
    });
}

getAndPrintHTML();