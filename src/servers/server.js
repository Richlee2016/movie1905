import rxios from './rxios'

const getData = (id,q) => rxios('post', '/api/v0/1905',{id,q});

export {
    getData, // 首页
}