const fs = require("fs");

fs.writeFileSync("writeFile.txt", "I am write in by Syn.. way.");
fs.appendFileSync("writeFile.txt", " I am Second line.");
