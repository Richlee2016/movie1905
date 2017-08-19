import React from "react";
import { inject, observer } from "mobx-react";
import less from "./Home.less";
import { BlockOne, BlockTwo } from "@/components/Movieblock";
import { home as rxiosHome } from "@/servers/server";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="indexBox">
            home
          </div>
        );
  }
}

