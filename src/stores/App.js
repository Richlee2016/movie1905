import { observable, action, computed, autorun } from "mobx";
import { getData } from "@/servers/server";

class App {
  @observable result;
  constructor() {
    this.result = null;
  }

  async getData() {
    getData(763926,`source(__id:{eq:1}){}`)
    .then(res => {
      const {data:{data}} = res;
      console.log(JSON.parse(data));
    });
  }
}

const app = new App();
export default app;
