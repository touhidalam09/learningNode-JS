const fs = require("fs");

// Its work with Asynchronous way
const dataNotWork = fs.readFile("myFile.txt");
// Its also need a callBack function
const dataCallBack = fs.readFile("myFile.txt", () => {
});
// Here Follow one pattern callBack function take two arguments error, data
const dataPattern = fs.readFile("myFile.txt", (err, data) => {
});
// error, data one of them must be true
const data = fs.readFile("myFile.txt", (err, data) => {
  console.log(data.toString());
});

console.log(
  "I am Print First 'readFile'. I am NON-Blocking. No one block for me."
);
