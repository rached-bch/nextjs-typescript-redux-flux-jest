import React from "react";
import TimerStore from "../stores/timerStore";
import { Dispatcher } from "flux";
import { startCounter, stopCounter } from "../actions/timerActions";

export default class Timer extends React.Component<any> {
  //   static async getInitialProps({ req }: any) {
  //     console.log("yesy", req);
  //     let timestamp = 10;
  //     return { timestamp };
  //   }
  timerStore: any;
  dispatcher: any;
  constructor(props) {
    super(props);

    this.timerStore = new TimerStore();
    this.dispatcher = new Dispatcher();
    this.dispatcher.register(
      this.timerStore.handleActions.bind(this.timerStore)
    );

    this.state = {
      showCounter: this.timerStore.showCounter,
      timestamp: this.timerStore.timestamp,
      timerInterval: this.timerStore.timerInterval
    };
  }
  //   state = {
  //     showCounter: timerStore.showCounter,
  //     timestamp: timerStore.timestamp,
  //     timerInterval: timerStore.timerInterval
  //   };

  componentWillMount() {
    this.timerStore.on("change", () => {
      this.setState({
        showCounter: this.timerStore.showCounter,
        timestamp: this.timerStore.timestamp,
        timerInterval: this.timerStore.timerInterval
      });
    });
  }

  startCounter() {
    startCounter(this.dispatcher);
  }

  stopCounter() {
    stopCounter(this.dispatcher);
  }

  render() {
    //console.log(this.state);
    return (
      <div className="card text-center">
        <div className="card-body">
          {this.timerStore.showCounter ? (
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                {this.timerStore.timestamp.getHours() +
                  ":" +
                  this.timerStore.timestamp.getMinutes() +
                  ":" +
                  this.timerStore.timestamp.getSeconds()}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => this.stopCounter()}
              >
                Stop
              </button>
            </div>
          ) : (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => this.startCounter()}
            >
              Show counter
            </button>
          )}
        </div>
      </div>
    );
  }
}
