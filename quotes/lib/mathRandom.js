/*
 * Title : Math Library
 * Description : Utility library for math-related function
 * Author : Touhid Alam
 * Date : 10/ 03 / 2022
 */

//Math Object - Module Scaffolding
const math = {};

math.getRandomNumber = function getRandomNumber(max, min) {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};

module.exports = math;
