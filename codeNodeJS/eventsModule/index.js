const events = require("events");

const emitter = new events.EventEmitter();

// register a listener for bellRing event
emitter.on("bellRing", ({ period, text }) => {
  console.log(`We need to run ${period} ${text}`);
});

//raise an event
// emitter.emit("bellRing")

// We can pass parameter
// emitter.emit("bellRing", "second period ended");

// We can set time for wait and also pass multiple parameter as a object
setTimeout(() => {
  emitter.emit("bellRing", {
    period: "second",
    text: "period ended",
  });
}, 2000);
