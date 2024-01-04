const fs = require("fs");
const path = require("path");

const textFile = path.join(__dirname, "text.txt");
const content = "This text file is modified by Rakaa";

fs.writeFile(textFile, content, (err) => {
  fs.readFile(textFile, "utf-8", (err, data) => {
    console.log(data);
  });
});
