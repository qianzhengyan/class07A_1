class Subject{
    constructor(){
        this.callbacks = [];//存储订阅者
        this.add = [];//存储添加的
        this.del = [];//存储删除的
    }
    subscibe(callback){//订阅
        this.callbacks.push(callback);
    }
    addNode(item){//添加
        this.add.push(item);//新添元素
        this.callbacks.forEach(i=>i(this.add,this.del))
    }
    delete(index){//删除
        this.del.push(this.add[index]);//把删除的元素放入del中
        this.add.splice(index,1);//删除该项元素
        this.callbacks.forEach(i=>i(this.add,this.del));
    }
}
export default Subject;