import { observable, action, computed, runInAction } from "mobx";
import { getData,newsDetail } from "@/servers/server";

class News {
  // 新闻首页
  @observable newsIndex;
  // 新闻详情页
  @observable newsDetail;
  constructor() {
    this.newsIndex = {};
    this.newsDetail = {};
  }

  // 获取新闻页 首页
  async getData() {
    getData('index').then(res => {
      const { data:{code,result} } = res;
      if(code === 1){
        runInAction(() => {
          this.newsIndex = result;
        })
      }else{
        console.log(result);
      };
    });
  }

  // 获取新闻 详情页
  async getDetailData(id){   
      const [a,b] = id.match(/(\d+)/g); 
      newsDetail()
      .then(res => {
        runInAction(() => {
          this.newsDetail = res?res.data.result.data[0] : {};
        })
      })
  }
}

const news = new News();
export default news;
