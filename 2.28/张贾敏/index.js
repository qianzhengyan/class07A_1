//es6实现单列模式

class Pp{
    constructor(){
        this.name;
        if(!Pp.aa){
           Pp.aa=this;
        }
        return Pp.aa
    }
    get(){
        return this.name
    }
    set(name){
        this.name=name
    }
}

let c=new Pp()
c.set("gjq")
let d=new Pp()
c.set("GJQ")
console.log(d.get())
console.log(c===d)


//使用发布订阅模式读取文件数据

let fs=require("fs")

function Events(){//中间商
    this.callbacks=[]//存储订阅者
    this.result=[]//存储结果
}

Events.prototype.on=function(callback){
    this.callbacks.push(callback)
}

Events.prototype.emit=function(data){
    this.result.push(data)
    this.callbacks.forEach(c=>c(this.result))
}

let e=new Events()
e.on((arr)=>{
    if(arr.length==2){
        console.log(arr)
    }
})
fs.readFile("./a.txt","utf8",(err,data)=>{
    e.emit(data)
    console.log(data)
})
