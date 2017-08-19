import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import "./Index.less";
import RouterBox from "@/routers"
import {Header,Footer,Menu} from "@/components/Layout"
export default class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="header-line">
          <Header />
          <Menu />
        </div>
        <section className="mainbox">
          <RouterBox />
        </section>
        <Footer />
      </div>
    );
  }
}
