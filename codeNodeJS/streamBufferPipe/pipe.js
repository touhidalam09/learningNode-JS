const fs = require("fs");

const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`, "utf8");
const ourWriteStream = fs.createWriteStream(`${__dirname}/outputData.txt`);

ourReadStream.pipe(ourWriteStream);
