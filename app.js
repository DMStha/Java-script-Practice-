const http = require("http"); /// declare library

const myFunction = (req, res) => {
  res.end("hello world");
};

http.createServer(myFunction).listen(4000);

/// events, fs, http, https , net , os , fs
