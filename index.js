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
const { handleReqRes } = require("./helpers/handleReqRes");

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
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
