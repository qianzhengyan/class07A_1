
// 1、编写call⽅法 apply⽅法需要写注释
Function.prototype.call=function(option){
    if(!option){
        option=typeof window =="undefined"?global:window
    }
    option.fn=this //this指的是调用这个方法的函数 在对象上写了一个方法 fn  这个fn和this一样 
    let rest=[...arguments].slice(1) 
    let res=option.fn(rest) //用context调用了fn然后把剩下的参数传过去
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


// 3、编写Observer类
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
// 4、编写⼀个⽅法将节点放⼊内存中
function addfragment(node){
    //创建文档碎片
    let documentFragment=document.createDocumentFragment()
    let Cnode
    while(Cnode=node.firstChild){
        documentFragment.appendChild(Cnode)
    }
    return documentFragment
}