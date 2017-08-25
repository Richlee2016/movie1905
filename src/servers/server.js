import rxios from './rxios'

const getData = (name) => rxios('get', '/api/v0/1905/page',{name});

export {
    getData, // 首页
}