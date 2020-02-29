class ClassName {
    constructor() {
        this.name;
        this.num;
        if(!ClassName.demo){
            ClassName.demo = this;
        }
        return ClassName.demo
    }
    get(){
        return {'班级名称':this.name,'班级人数':this.num}
    }
    set(name,num){
        this.name = name
        this.num = num
    }
}
let a=new ClassName()
a.set('1707A',89)
// console.log(a.get())
let b=new ClassName()
a.set('1708B',50)
// console.log(b.get())



let blackList=[110]
function answer(phone){
    console.log('接听',phone)
}
function Phone(phone){
    console.log('来电话了')
    if(blackList.includes(phone)){
        console.log('黑名单用户')
    }else{
        answer.call(this,phone)
    }
}
// Phone(119)




let fs = require('fs');

class Events{
    constructor(){
        this.callbacks = []
        this.result = []
    }
    on(callback){
        this.callbacks.push(callback)
    }
    emit(data){
        this.result.push(data);
        this.callbacks.forEach(v=>v(this.result))
    }
}
let eve = new Events()
eve.on((arr)=>{
    if(arr.length==3){
        console.log(arr)
    }
})
fs.readFile('./txt/a.txt','utf8',(err,data)=>{
    eve.emit(data)
})
fs.readFile('./txt/b.txt','utf8',(err,data)=>{
    eve.emit(data)
})
fs.readFile('./txt/c.txt','utf8',(err,data)=>{
    eve.emit(data)
})