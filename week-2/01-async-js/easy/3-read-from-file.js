const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file1.txt");
fs.readFile(filePath, "utf-8", (err, data) => {
  console.log(data);
});

let sum = 0;
for (let i = 0; i < 10000000; i++) {
  sum = sum + i;
}
console.log(sum);
