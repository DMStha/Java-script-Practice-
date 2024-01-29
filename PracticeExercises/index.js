const express = require("express");
const app = express();

//network port allocate

const port = 6000;

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});
