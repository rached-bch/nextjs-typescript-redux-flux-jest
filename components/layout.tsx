import React from "react";
import Head from "next/head";
import "bootstrap-scss/bootstrap.scss";
import "../styles/sass/app.scss";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>Next app</title>
          <meta
            name="description"
            content="Description of the next application..."
          />
        </Head>
        <div className="container main-body">
          <div className="col-xs-12">{this.props.children}</div>
        </div>
      </div>
    );
  }
}
