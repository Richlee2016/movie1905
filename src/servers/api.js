const request = require("request-promise");
const spider = require("./spider/option");

const myquery = encodeURIComponent(`source(__id:1){
    data{
      __id
    }
  }`);

const myUrl = spider.query({
  source_id: 763592,
  query: myquery
});
const setUrl = "http://graphql.shenjianshou.cn/" + myUrl;
console.log(setUrl);

exports.test = function(req, res, next) {
    request(setUrl)
    .then(data => {
        console.log(data);
        res.json({msg:'ok'})
    })
};
