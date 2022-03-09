const Period = require("./period");

const periodObj = new Period();

periodObj.on("bellRing", ({ period, text }) => {
  console.log(`We are run !!! ${period} ${text}`);
});

periodObj.startPeriod();
