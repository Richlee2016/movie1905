// 处理 news href 
export const regNewHref = href => {
    const reg = /(\d+)/g;
    let num = href.match(reg).slice(1,3);
    return `/detail/new/${num[0]}丨${num[1]}`
}

export const videoPlayer = (url) =>{
    const reg = /(\d+)/g;
    const [a,video] = url.match(reg);
    return `<embed 
    height="415" 
    width="100%" 
    quality="high" 
    allowfullscreen="true" 
    type="application/x-shockwave-flash"
    src="http://static.m1905.com/v1/playerv1/1905Player.swf" 
    flashvars="configUrl=http%3A//static.m1905.com/profile/video/1/2/${video}.xml&LoGo=false&wide=false&hd=true&light=true&playAd=true&autoPlay=true&cdn=false&p2p=false&cid=${video}&ref=1,2&skipPOP=http%3A//static.m1905.com/images/member.swf&codeRateTxt=[流畅,高清,超清]&type=video"
    pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"
    ></embed>`
}