import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Announcement from "../components/announcement";
import { connect } from "react-redux";

interface iProps {
  announcementMessage: string;
}

class Index extends React.Component<iProps> {
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
      </Layout>
    );
  }
}
const mapStateToProps = state => ({
  announcementMessage: state.message
});

export default connect(mapStateToProps)(Index);
