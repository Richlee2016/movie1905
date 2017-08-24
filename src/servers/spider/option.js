const md5 = require("md5");
const qs = require("qs");

const options = {
  user_key: "44e9bd3958-ZjM0Y2VjOW",
  timestamp: Math.ceil((new Date().getTime())/1000),
  secret_key: "M0NGU5YmQzOTU4OT-96596065ccf34ce"
};

class Config {
  constructor() {
    this.user_key = options.user_key;
    this.secret_key = options.secret_key;
    this.timestamp = options.timestamp;
    this.initSign = this.user_key + this.timestamp + this.secret_key;
  }

  getSign() {
    return md5(this.initSign);
  }

  query(opt) {
    const init = {
      user_key: this.user_key,
      timestamp: this.timestamp,
      sign: this.getSign()
    }
    var setQs = Object.assign(init,opt);
    const myqs = qs.stringify(setQs);
    return "?" + myqs;
  }
}

module.exports = new Config();
