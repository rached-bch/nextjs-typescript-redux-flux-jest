import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";
import Timer from "../components/timer";
import Announcement from "../components/announcement";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="card-columns">
          <Timer></Timer>
          <Timer></Timer>
          <Timer></Timer>
        </div>
        <Announcement></Announcement>
      </Layout>
    );
  }
}
