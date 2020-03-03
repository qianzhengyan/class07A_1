class Watcher{
    constructor(){
        this.events=[]
    }
    on(type,Watcher){
        if(this.events[type] instanceof Array){
            this.events[type].push(Watcher)
        }else{
            this.events[type]=[Watcher]
        }
    }
    emit(type,reset){
        this.events[type].forEach(v=>v(reset))
    }
}
export default Watcher