var http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    if (req.url === "/") {
      res.write("I am on server");
      res.end();
    } else if (req.url === "/about") {
      res.write("I am about route");
      res.end();
    } else {
      res.write("404 Not Found!!");
      res.end();
    }
  })
  .listen(8080);

console.log("listing on port 8080. \nserver is running....");
