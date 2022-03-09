/*
 * Title : Quote Generator
 * Description : Utility library for quote generator
 * Author : Touhid Alam
 * Date : 10/ 03 / 2022
 */

// Dependence
const mathLib = require("./lib/mathRandom");
const quoteLib = require("./lib/quotes");

const app = {};

app.config = {
  timeBetweenQuote: 1000,
};

app.printQuote = function printQuote() {
  //Get all quotes
  const allQuotes = quoteLib.getAllQuotes();

  //Get the length of quotes;
  const numberOfQuotes = allQuotes.length;

  // Pick the random number
  const randomNumber = mathLib.getRandomNumber(1, numberOfQuotes);

  const selectQuote = allQuotes[randomNumber - 1];

  console.log(selectQuote);
  console.log("\n");
};

// infinity loop call
app.infinityLoop = function infinityLoop() {
  setInterval(app.printQuote, app.config.timeBetweenQuote);
};

// Invoke the loop
app.infinityLoop();
