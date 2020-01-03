import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAnnouncement } from "../states/announcement/actions";
interface IProps {
  announcementMessage: string;
  updateAnnouncement: any;
}

interface IState {}

class Index extends React.Component<IProps, IState> {
  render() {
    const { announcementMessage, updateAnnouncement } = this.props;
    return (
      <Layout>
        <div className="card-columns">
          <Timer></Timer>
          <Timer></Timer>
          <Timer></Timer>
        </div>
        <div className="alert alert-info">
          Announcement: {announcementMessage}
          <button onClick={() => updateAnnouncement("We are closed today!")}>
            Close!
          </button>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  announcementMessage: state.message
});

const mapDispatchToProps = dispatch => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
