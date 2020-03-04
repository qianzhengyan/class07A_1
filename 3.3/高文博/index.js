
Function.prototype.call=function(option){
    if(!option){
        option=typeof window =="undefined"?global:window
    }
    option.fn=this
    let rest=[...arguments].slice(1) 
    let res=option.fn(rest)
    delete opiton.fn
    return res
}
Function.prototype.apply=function(opiton){
    if(!option){
        option=typeof window=="undefined"?global:window
    }
    option.fn=this
    let rest=arguments[1]
    let res=option.fn(...rest)
    delete opiton.fn
    return res
}

class Observer{
    constructor(data){
        this.observer(data)
    }
    observer(data){
        if(data&&typeof data=="object"){
            for(let key in data){
                this.observer(data[key])
                Object.defineProperty(data,key,{
                    get(){
                        return data[key]
                    },
                    set(val){
                        if(val!=data[key]){
                            data[key]=val
                        }
                    }
                })
            }
        }
    }
}



function addfragment(node){
    let documentFragment=document.createDocumentFragment()
    let Cnode
    while(Cnode=node.firstChild){
        documentFragment.appendChild(Cnode)
    }
    return documentFragment
}