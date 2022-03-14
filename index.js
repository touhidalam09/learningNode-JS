/**
 * Title : Raw Node
 * Description: Restful API LWS
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// Dependence
const http = require("http");
const url = require("url");
const { StringDecoder } = require("string_decoder");

// App Object - Module Scaffolding
const app = {};

// Configure
app.config = {
  port: 8080,
};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () => {
    console.log(`listening to port ${app.config.port} ..`);
  });
};

// handle request Response
app.handleReqRes = (req, res) => {
  // request handle
  // get the url with parse
  const parseUrl = url.parse(req.url, true);
  const pathName = parseUrl.pathname;
  const trimmedPath = pathName.replace(/^\/+|\/+$/g, ""); //for route pathName
  const queryStringObject = pathName.query; // for query string
  const method = req.method.toLowerCase(); // for method request
  const headerObject = req.headers; // for header metadata
  //body start for POST method
  const decode = new StringDecoder("utf-8"); // for body data
  const realData = "";
  req.on("data", (buffer) => {
    realData += decode.write(buffer);
  });
  req.on("end", () => {
    realData += decode.end();
    console.log(method);
    // response handle
    res.end("Raw Node mon!!");
  });
  //body end
};

// start the server
app.createServer();
