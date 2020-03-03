class Subject{
    constructor(){
        this.callbacks=[]
        this.data=[]
        this.delData=[]
    }
    emit(item){
        this.data.push(item)
        this.callbacks.forEach(li=>li(this.data,this.delData))
    }
    on(callback){//订阅者
        this.callbacks.push(callback)
    }
    del(index){
        console.log(this.data)
        this.delData.push(this.data[index])
        this.data.splice(index,1)
        this.callbacks.forEach(li=>li(this.data,this.delData))
    }
}
export default Subject