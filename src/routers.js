import React from "react";
import { Route, Link, Switch } from "react-router-dom";
import LazyRoute from "lazy-route";

export default class Routers extends React.Component {
  render() {
    return (
      <div className="router-box">
        <Route
          path="/home"
          render={props =>
            <LazyRoute {...props} component={import("@/views/Home")} />}
        />
        <Route
          path="/news"
          render={props =>
            <LazyRoute {...props} component={import("@/views/News")} />}
        />
      </div>
    );
  }
}
