import rxios from './rxios'

const getData = (name) => rxios('get', '/api/v0/1905/page',{name});
const newsDetail = () => rxios('get', '/test');
export {
    getData, // 首页
    newsDetail
}