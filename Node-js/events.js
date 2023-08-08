const fs = require("fs");

const file = fs.createReadStream("./data.txt");

file.on("open", (data) => {
  console.log("data.txt file is open");
});

const data = "hello world";

fs.writeFileSync("./data.txt", data);
