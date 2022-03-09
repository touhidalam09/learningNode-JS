const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, "utf8");
const ourWriteStream = fs.createWriteStream(`${__dirname}/outputData.txt`);

// ourReadStream.on("data", (data) => {
//   console.log(data); // Every chunk is Buffer
// });

ourReadStream.on("data", (chunk) => {
  ourWriteStream.write(chunk);
});
