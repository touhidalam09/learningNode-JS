const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    const ourReadStream = fs.createReadStream(
      `${__dirname}/bigData.txt`,
      "utf8"
    );

    res.writeHead(200, { "Content-Type": "text/html" });
    ourReadStream.pipe(res);
  })
  .listen(8080);

console.log("Server is running port 8080 ....");
