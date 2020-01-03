import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateAnnouncement } from "../states/announcement/actions";

interface aProps {
  announcementMessage: string;
  updateAnnouncement: any;
}

interface aState {}

class Announcement extends React.Component<aProps, aState> {
  render() {
    const { announcementMessage, updateAnnouncement } = this.props;
    return (
      <div className="alert alert-info">
        Announcement: {announcementMessage}
        <button onClick={() => updateAnnouncement("We are closed today!")}>
          Close!
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  announcementMessage: state.message
});

const mapDispatchToProps = dispatch => ({
  updateAnnouncement: bindActionCreators(updateAnnouncement, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Announcement);
