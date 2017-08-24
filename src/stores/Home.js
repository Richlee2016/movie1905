import { observable, action, computed,runInAction } from "mobx";
import {splarr,cutarr} from '../utils'
class Home {
  constructor() {
  }

  // 获取数据
  async getData() {
    // 如果存在不再请求
      runInAction(() => {
      })
  }

}

const home = new Home();
export default home;
