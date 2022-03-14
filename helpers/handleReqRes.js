/**
 * Title : Handle Request Response
 * Description: Handle Request and Response
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// devDependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
// routes
const routes = require("../routes");
const { notFoundHandler } = require("../handlers/routeHandlers/notFound");

// handle Object - Module Scaffolding
const handle = {};
handle.handleReqRes = (req, res) => {
  // request handle
  // get the url with parse
  const parseUrl = url.parse(req.url, true);
  const pathName = parseUrl.pathname;
  const trimmedPath = pathName.replace(/^\/+|\/+$/g, ""); //for route pathName
  const queryStringObject = pathName.query; // for query string
  const method = req.method.toLowerCase(); // for method request
  const headerObject = req.headers; // for header metadata

  const requestProperties = {
    parseUrl,
    pathName,
    trimmedPath,
    queryStringObject,
    method,
    headerObject,
  };

  const decode = new StringDecoder("utf-8"); // for body data
  let realData = "";

  const chosenHandler = routes[trimmedPath]
    ? routes[trimmedPath]
    : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decode.write(buffer);
  });
  req.on("end", () => {
    realData += decode.end();
    res.write(realData);
    // response handle
    res.end(" Raw Node mon!!");
  });
};
module.exports = handle;
