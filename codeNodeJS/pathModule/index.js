const path = require("path");

// console.log(path);
const myPath = "G:/Learning/learning-node-js/pathModule/index.js";

console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.extname(myPath));
console.log(path.parse(myPath));
