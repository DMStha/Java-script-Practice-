const express = require("express");
const app = express();

app.get("/:name/:lastName", function (req, res) {
  const { name, lastName } = req.params;
  res.send(`hello world form ${name} ${lastName}`);
});

app.listen(3000);
console.log("app started on port 3000");
