/**
 * Title : Route
 * Description: Application Routes
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// devDependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");
// Object model scaffolding
const routes = {
  sample: sampleHandler,
};

module.exports = routes;
