let Img=(function(){
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
        Img.setSrc(img.src)
    }
    return {
        setSrc:(src)=>{
            Img.setSrc("./1.png")
            img.src=src
        }
    }
})
proxy()

const fs=require("fs")
class subscriber{
    constructor(){
        this.result=[]
        this.subscriber=[] 
    }
    on(callback){ 
        this.subscriber.push(callback)
    }
    emit(data){ 
        this.result.push(data)
        this.subscriber.forEach(item=>item(this.result))
    }
}
let sub=new subscriber()
fs.readFile("./a.txt","utf-8",(err,data)=>{
    sub.emit(data)
})
sub.on((data)=>{
    console.log(data)
})