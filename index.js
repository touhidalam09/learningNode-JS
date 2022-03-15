/**
 * Title : Raw Node
 * Description: Restful API LWS
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// Dependence
const http = require("http");
const { handleReqRes } = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");

// App Object - Module Scaffolding
const app = {};

// create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listening to port ${environment.port} ..`);
  });
};

// handle request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
