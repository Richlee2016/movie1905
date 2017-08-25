import React from "react";
import { inject, observer } from "mobx-react";
import {Banner} from "@/components/Common"
import './news.less'
@inject("news")
@observer
export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.news;
  }

  componentDidMount() {
    this.store.getData();
  }

  render() {
    const {
      newsIndex: { data }
    } = this.store;
    return (
      <div className="news">
        <div className="news-banner">
          {data?<Banner data={data.banner.toJS()} /> : null}
        </div>
      </div>
    );
  }
}
