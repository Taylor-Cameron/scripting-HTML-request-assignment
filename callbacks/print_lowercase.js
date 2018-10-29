var myFunctions = require('./http-functions');
var https = require('https');
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

myFunctions(requestOptions, printLowerCase);