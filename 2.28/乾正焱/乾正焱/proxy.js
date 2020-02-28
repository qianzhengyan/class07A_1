// 使用代理模式  实现电话号码拦截
let balckList = ['1234568549','17810683725'];//电话黑名单
function Answer(phone){
    console.log(`接听${phone}电话`)
}

function ProxyPhone(phone){
    console.log('电话。。。。响');
    if(balckList.includes(phone)){
        console.log('该电话号码已存在黑名单中')
    }else{
        Answer.call(this,phone);
    }
}
ProxyPhone('1234568540')