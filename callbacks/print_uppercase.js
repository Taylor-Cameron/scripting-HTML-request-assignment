var myFunctions = require("./http-functions");
var https = require("https");
var requestOptions = {
  host: "sytantris.github.io",
  path: "/http-examples/step6/uppercase.html"
};

function printUpperCase(html) {
  console.log(html.toUpperCase());
}

myFunctions(requestOptions, printUpperCase);
