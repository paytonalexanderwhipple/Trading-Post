import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";

class Page extends Component {
  render() {
    return (
      <>
        <Meta />
        <Header />
        <p>Its the page</p>
        {this.props.children}
      </>
    );
  }
}

export default Page;
