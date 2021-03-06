import { observable, action, computed, runInAction } from "mobx";
import { getData } from "@/servers/server";

class App {
  @observable newsIndex;
  constructor() {
    this.newsIndex = {};
  }

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
}

const app = new App();
export default app;
