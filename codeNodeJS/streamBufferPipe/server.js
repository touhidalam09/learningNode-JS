const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
      res.write("Home Page");
      res.write("<br/>");
      res.write(`<form action="/about" method="POST">`);
      res.write(`<input type="text" name="bigData"/>`);
      res.write(`</form>`);
      res.end();
    } else if (req.url === "/about" && req.method === "POST") {
      res.write("I am About Page <br/>");
      //   console.log(req.data); //  Here entire data is not coming .Data is Coming by Stream Mechanism
      //   req.on("data", (chunk) => {
      //     console.log(chunk);
      //   });

      // For receive entire data
      const body = [];
      req.on("data", (chunk) => {
        body.push(chunk); //Buffer Data push on array
      });
      // When all data in body Array
      req.on("end", () => {
        console.log("Stream Finished.");
        const parseBody = Buffer.concat(body).toString(); //Because on the Body have buffer elements
        console.log(parseBody);
      });

      res.write("chunk");
      res.end();
    } else {
      res.write("Not Found");
      res.end();
    }
  })
  .listen(8080);

console.log("Server is running port 8080 ....");
