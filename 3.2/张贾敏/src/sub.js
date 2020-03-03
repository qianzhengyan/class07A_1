class Wacther{
    constructor(){
        this.events=[]
    }
    on(type,wacther){
        if(this.events[type] instanceof Array){
            this.events[type].push(wacther)
        }else{
            this.events[type]=[wacther]
        }
    }
    emit(type,reste){
        this.events[type].forEach(item=>{
            item(reste)
        })
    }
}
export default Wacther