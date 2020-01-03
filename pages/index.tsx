import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Announcement from "../components/announcement";
import { connect } from "react-redux";
import { range, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { map, filter } from "rxjs/operators";

interface iProps {
  announcementMessage: string;
}

class Index extends React.Component<iProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const githubUsers = `https://api.github.com/users?per_page=2`;

    const users = ajax({
      url: githubUsers,
      method: "GET",
      headers: {
        /*some headers*/
      },
      body: {
        /*in case you need a body*/
      }
    });

    const subscribe = users.subscribe(
      res => console.log(res),
      err => console.error(err)
    );
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
        <h1>Hello World</h1>
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
