import { observable, action, computed,autorun } from "mobx";
import axios from 'axios';
// 菜单数据(mock)


// 菜单栏 登录


// 赛选菜单栏


class App {
  @observable result;
  constructor() {
    this.result=null;
  }

  async getData() {
    axios('')
  }
  
}

const app = new App();
export default app;
