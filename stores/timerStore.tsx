import { EventEmitter } from "events";

export default class TimerStore extends EventEmitter {
  showCounter: boolean = false;
  timestamp: any = new Date();
  timerInterval: any = null;

  startCounter() {
    let timestamp = new Date();
    this.timestamp = timestamp;
    let timerInterval = setInterval(() => {
      let timestamp = new Date();
      this.timestamp = timestamp;
      this.emit("change");
      console.log("yes");
    }, 1000);
    this.timerInterval = timerInterval;
    this.showCounter = true;
    this.emit("change");
  }

  stopCounter() {
    clearInterval(this.timerInterval);
    this.timerInterval = null;
    this.showCounter = false;
    this.emit("change");
  }

  handleActions(action: string) {
    switch (action) {
      case "START_COUNTER": {
        this.startCounter();
        break;
      }
      case "STOP_COUNTER": {
        this.stopCounter();
        break;
      }
    }
  }
}

// let timerStore = new TimerStore();

// export default timerStore;
