/*
 * Title : Quote Library
 * Description : Utility library for quote function
 * Author : Touhid Alam
 * Date : 10/ 03 / 2022
 */

// Dependencies
const fs = require("fs");

// Quotes object - Module scaffolding
const quotes = {};

// Get all the module and return them to the user
quotes.getAllQuotes = function getAllQuotes() {
  const fileContents = fs.readFileSync(`${__dirname}/quotes.txt`, "utf8");

  // Turn the string into an array
  const arrayOfQuote = fileContents.split(/\r?\n/);

  return arrayOfQuote;
};

module.exports = quotes;
