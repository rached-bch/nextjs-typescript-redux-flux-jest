import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Announcement from "../components/announcement";
import { connect } from "react-redux";
import { range, fromEvent } from "rxjs";
import { map, filter } from "rxjs/operators";

interface iProps {
  announcementMessage: string;
}

class Index extends React.Component<iProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //create observable that emits click events
    const source = fromEvent(document.getElementById("button"), "click");
    //map to string with given event timestamp
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    //output (example): 'Event time: 7276.390000000001'
    const subscribe = example.subscribe(val => console.log(val));
  }

  render() {
    const { announcementMessage } = this.props;
    return (
      <Layout>
        <div className="card-columns">
          <Timer></Timer>
          <Timer></Timer>
          <Timer></Timer>
        </div>
        <div className="alert alert-warning">
          Comminication test : {announcementMessage}
        </div>
        <Announcement></Announcement>
        <button id="button">Click</button>
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  announcementMessage: state.message
});

export default connect(mapStateToProps)(Index);
