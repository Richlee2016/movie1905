// 处理 news href 
export const regNewHref = href => {
    const reg = /(\d+)/g;
    let num = href.match(reg).slice(1,3);
    return `/news/${num[0]}/${num[1]}`
}