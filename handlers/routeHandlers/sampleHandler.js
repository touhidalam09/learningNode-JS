/**
 * Title : Sample Handler
 * Description: Application Routes sample handler
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// Object - model scaffolding
const handle = {};

handle.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: "THis is sample",
  });
};

module.exports = handle;
