// //单例模式
// class single{
//     constructor(){
//         this.name="",
//         this.num=0
//         if(!single.demo){
//             single.demo=this
//         }
//         return single.demo
//     }
//     set(name,num){
//         this.name=name
//         this.num=num    
//     }
//     get(key){
//         return this[key]
//     }
// }
// let a=new single()
// let b=new single()
// a.set("1707",50)
// console.log(b.get("name"))


// 使⽤代理模式 实现电话号码的拦截
// let blacklist=["123"]
// let Pcall=function (){
//     console.log("接听")
// }
// let proxy=function(phone){
//     if(blacklist.includes(phone)){
//         console.log("黑名单")
//     }else{
//         Pcall()
//     }
// }
// proxy("12")

// 使⽤代理模式 实现图⽚懒加载

let crtImage=(function(){
    let img=document.createElement("img")
    document.body.appendChild(img)
    return {
        setSrc:(src)=>{
            img.src=src
        }
    }
})()

let proxy=(function(){
    let img=new Image()
    img.onload=()=>{
        crtImage.setSrc(img.src)
    }
    return {
        setSrc:(src)=>{
            crtImage.setSrc("./1.png")
            img.src=src
        }
    }
})()
proxy.setSrc("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1582906344825&di=d929fef7b71c99525943d0e7aa665140&imgtype=0&src=http%3A%2F%2Fb2-q.mafengwo.net%2Fs5%2FM00%2F91%2F06%2FwKgB3FH_RVuATULaAAH7UzpKp6043.jpeg")

// 使⽤发布订阅模式读取⽂件数据
const fs=require("fs")
class subscriber{
    constructor(){
        this.result=[]// 储存读取后的结果
        this.subscriber=[] //储存订阅者
    }
    on(callback){ //添加订阅者
        this.subscriber.push(callback)
    }
    emit(data){ // 将读取结果保存
        this.result.push(data)
        this.subscriber.forEach(item=>item(this.result))//遍历订阅者  把读取结果当作参数传入每一项中
    }
}
let sub=new subscriber()
fs.readFile("./a.txt","utf-8",(err,data)=>{
    sub.emit(data)
})
sub.on((data)=>{
    console.log(data) //data就是读取的数据
})