class Observer{//数据劫持
    constructor(data){
        this.observer(data)
    }
    observer(data){
        if(data&&typeof data=="object"){
            for(let key in data){
                this.defineProperty(data,key,data[key])
            }
        }
    }
    defineProperty(obj,key,value){
        this.observer(value)
        Object.defineProperty(obj,key,{
            get(){
                return value
            },
            set(val){
                if(val!==value){
                    this.observer(val)
                    value=val
                }
                
            }
        })
    }
}
//基类调度
class Compile{
    constructor(el,vm){
        //编译 先拿到节点 和实例
        //首先看传入的节点是不是元素如果是就获取
        this.el=this.isEl(el)?el:document.querySelector(el)
        this.vm=vm
        //把节点放入内存
        let fragment = this.infragment(this.el)
        this.compile(fragment)
        this.el.appendChild(fragment)

    }
    isEl(el){
        return el.nodeType==1
    }
    //把节点放入内存
    infragment(el){
        //创建文档碎片
        let fragment=document.createDocumentFragment()
        let firstNode
        while(firstNode=el.firstChild){
            //把节点放入内存
            fragment.appendChild(firstNode)
        }
        return fragment
    }
    //编译
    compile(el){
        //拿到传入传入节点的子节点
        let childNode=el.childNodes;
        console.log(childNode);
        //转数组
        [...childNode].forEach(item=>{
            //判断每个子节点是元素还是文本
            if(this.isEl(item)){
                
                this.compileEl(item)
                this.compile(item)
            }else{
                this.compileText(item)
            }
        })
    }
    //编译元素
    compileEl(el){
        let attributes=el.attributes;
        
        [...attributes].forEach(item=>{
            console.log([...attributes]);
            let {name,value}=item
            
            //判断属性开头是不是v-
            if(this.isV(name)){
                //掐头去尾
                let [,mod]=name.split("-")
                let [modname,]=mod.split(":") //model
                compileUils[modname](el,value,this.vm)
            }
        })
    }
    //判断属性开头
    isV(name){
        console.log(name)
        return name.startsWith("v-")
    }
    //编译文本
    compileText(node){
        console.log(node)
        let content=node.textContent
        console.log(content)
        if(/\{\{(.+?)\}\}/.test(content)){
            compileUils["text"](node,content,this.vm)
        }
    }
}

compileUils={
    getdata(vm,value){
       return  value.split(".").reduce((p,c)=>{
            return p[c]
        },vm.$data)
    },
    model(node,value,vm){
        let newVal=this.getdata(vm,value)
        this.modelUpdate(node,newVal)
    },
    modelUpdate(node,val){
        node.value=val
    },
    text(node,value,vm){
       let val= value.replace(/\{\{(.+?)\}\}/,(...args)=>{
            return this.getdata(vm,args[1])
        })
        this.textUpdate(node,val)
    },
    textUpdate(node,val){
        node.textContent=val
    }
}
class Vue{
    constructor(option){
        this.$el = option.el;
        this.$data = option.data;
        if(this.$el){
            //数据劫持
            new Observer(this.$data)
            new Compile(this.$el,this)
        }
    }
}