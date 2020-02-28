let fs = require('fs');
class Events{
    constructor(){
        this.callbacks = [];//存储订阅者
        this.result = [];//存储结果
    }
    on(callback){//存入订阅者
        this.callbacks.push(callback);
    }
    emit(data){
        this.result.push(data);
        this.callbacks.forEach(item=>item(this.result))
    }
}
let e = new Events();
e.on((arr)=>{
    if(arr.length==1){
        console.log(arr)
    }
})
fs.readFile('./name.txt','utf-8',(err,data)=>{
    e.emit(data)
})
