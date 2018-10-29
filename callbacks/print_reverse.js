var myFunctions = require("./http-functions");
var https = require("https");
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};

function printReverse(html) {
  var htmlReverse = '';
  htmlReverse = html.split("").reverse().join("");
  console.log(htmlReverse);
}

myFunctions(requestOptions, printReverse);
