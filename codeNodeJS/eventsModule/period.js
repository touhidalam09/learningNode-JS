const EventEmitter = require("events");

class Period extends EventEmitter {
  startPeriod() {
    console.log("Class Started");

    //raise event when bell rings
    //raise an event
    setTimeout(() => {
      this.emit("bellRing", {
        period: "First",
        text: "period ended.",
      });
    }, 2000);
  }
}

module.exports = Period;
