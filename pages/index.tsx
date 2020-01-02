import React from "react";
import { NextPageContext } from "next";
import Layout from "../components/layout";

interface Props {
  userAgent?: string;
}

export default class Index extends React.Component<Props> {
  static async getInitialProps({ req }: NextPageContext) {
    const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
    return { userAgent };
  }

  render() {
    const { userAgent } = this.props;
    return <Layout>Your user agent: {userAgent}</Layout>;
  }
}
