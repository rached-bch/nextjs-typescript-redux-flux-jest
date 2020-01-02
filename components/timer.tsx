import React from "react";

export default class Timer extends React.Component {
  //   static async getInitialProps({ req }: any) {
  //     console.log("yesy", req);
  //     let timestamp = 10;
  //     return { timestamp };
  //   }

  state = {
    showCounter: false,
    timestamp: new Date(),
    timerInterval: null
  };

  startCounter() {
    let timestamp = new Date();
    this.setState({ timestamp: timestamp });
    let timerInterval = setInterval(() => {
      let timestamp = new Date();
      this.setState({ timestamp: timestamp });
      console.log("yes");
    }, 1000);
    this.setState({ timerInterval: timerInterval });
    this.setState({ showCounter: true });
    console.log("ok");
  }

  stopCounter() {
    clearInterval(this.state.timerInterval);
    this.setState({ timerInterval: null, showCounter: false });
  }

  render() {
    //console.log(this.state);
    return (
      <div className="card text-center">
        <div className="card-body">
          {this.state.showCounter ? (
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-secondary">
                {this.state.timestamp.getHours() +
                  ":" +
                  this.state.timestamp.getMinutes() +
                  ":" +
                  this.state.timestamp.getSeconds()}
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
