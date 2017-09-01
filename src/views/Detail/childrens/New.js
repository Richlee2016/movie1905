import React from "react";
import { inject, observer } from "mobx-react";
import { videoPlayer } from "@/utils";
import './New.less'
@inject("news")
@observer
export default class New extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.news;
  }

  componentDidMount() {
    this.store.getDetailData(this.props.match.params.id);
  }

  // 创建 新闻版块
  createNews() {
    return {
      __html: this.store.newsDetail.new
    };
  }

  // 创建 播放器
  createVideo() {
    if (this.store.newsDetail.video) {
      return (
        <div
          className="video-box"
          dangerouslySetInnerHTML={{
            __html: videoPlayer(this.store.newsDetail.video)
          }}
        />
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className="detail-new">
        {this.createVideo()}
        
        <div className="news-detail hasvideo" dangerouslySetInnerHTML={this.createNews()} />
      </div>
    );
  }
}
