const fs = require("fs");


const data = fs.readFileSync("myFile.txt", "utf8");
// console.log(data);
module.exports = data;
