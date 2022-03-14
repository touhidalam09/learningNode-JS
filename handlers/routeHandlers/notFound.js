/**
 * Title : Not Found Handler
 * Description: Application Routes Not Found handler
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// Object - model scaffolding
const handle = {};

handle.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Not Found !!!",
  });
};

module.exports = handle;
