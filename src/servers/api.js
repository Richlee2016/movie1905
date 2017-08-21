const request = require('request-promise');
const cheerio = require('cheerio');

exports.test = function(req,res,next){
    request("http://www.1905.com/news/20170821/1210807.shtml?fr=homepc_news_kx#p1")
    .then( data => {
        console.log(data);
    })
}