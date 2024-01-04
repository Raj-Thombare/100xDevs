const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file-cleaner.txt");

function removeExtraSpaces(filename) {
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }

    const updatedContent = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filename, updatedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to the file:", err);
        return;
      }
      console.log("Extra spaces removed and file updated successfully!");
    });
  });
}

removeExtraSpaces(filePath);
