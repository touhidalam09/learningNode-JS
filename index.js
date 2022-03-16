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
const data = require("./lib/data");

// App Object - Module Scaffolding
const app = {};

// testing
data.delete("test", "test2", (error) => {
  console.log(" error was : " + error);
});

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
