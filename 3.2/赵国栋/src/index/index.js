class Subject{
    constructor(){
        this.callbacks = []
        this.add = []
        this.del = []
    }
    subscibe(callback){
        this.callbacks.push(callback);
    }
    addNode(item){
        this.add.push(item)
        this.callbacks.forEach(i=>i(this.add,this.del))
    }
    delete(index){
        this.del.push(this.add[index])
        this.add.splice(index,1)
        this.callbacks.forEach(i=>i(this.add,this.del));
    }
}
export default Subject;