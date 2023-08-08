const http = require("http"); /// declare library

const date = require("./myModule.js");

const myFunction = (req, res) => {
  const dateTime = date();
  res.end(`hello world ${dateTime}`);
};

http.createServer(myFunction).listen(3000);
console.log("app is running on prot 3000");

/// events, fs, http, https , net , os , fs

const http = require("http");
const uc = require("upper-case");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(uc.upperCase("Hello World"));
    res.end();
  })
  .listen(4000);
