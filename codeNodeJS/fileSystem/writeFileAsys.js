const fs = require("fs");

const fileName = "writeFile.txt";
const writeData = "I am writing by asynchronous way";
fs.writeFile(fileName, writeData, (error, data) => {
  console.log("Success, I am Asynchronous writeFile.");
});
