/**
 * Title : Environment
 * Description: Environment setup for staging, production state
 * Author: Touhid Alam
 * Date: 15/ 03/ 2022
 */

// dependencies

//module scaffolding
const environments = {};

environments.staging = {
  port: 8080,
  envName: "staging",
};

environments.production = {
  port: 5000,
  envName: "production",
};

// determine which environment was passed
const currentEnvironment =
  typeof process.env.NODE_ENV === "staging" ? process.env.NODE_ENV : "staging";

// export corresponding environment object
const environmentToExport =
  typeof environments[currentEnvironment] === "object"
    ? environments[currentEnvironment]
    : environments.staging;

module.exports = environmentToExport;
