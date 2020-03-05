class Vue{
    constructor(option){
        this.$el=option.el
        this.$data=option.data
        if(this.$el){
            new Observer(this.$data)
            new Compile(this.$el,this)
        }
    }
}
//数据劫持
class Observer{
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
    defineProperty(data,key,value){
        this.observer(data[key])
        let dep = new Dep();
        Object.defineProperty(data,key,{
            get(){
                Dep.target&&dep.addSub(Dep.target)
                return value
            },
            set:(val)=>{
                if(val!==value){
                    this.observer(val)
                    value=val
                    dep.publish()
                }
            }
        })
    }
}

//编译 
class Compile{
    constructor(el,vm){
        this.el=this.isEl(el)?el:document.querySelector(el)
        this.vm=vm
        let fragment= this.infragment(this.el)
        this.compile(fragment)
        this.el.appendChild(fragment)
    }
    //放入内存
    infragment(node){
        let fragment=document.createDocumentFragment()
        let child
        while(child=node.firstChild){
            fragment.appendChild(child)
        }
        return fragment
    }
    compile(node){
        
        let children=node.childNodes;
        console.log(children);
        [...children].forEach(item=>{
            if(this.isEl(item)){
                
                //编译元素下属性
                this.compileEl(item)
                //递归调用  假如是元素  那么他下可能还有元素
                this.compile(item)
            }else{
                this.compileText(item)
            }
        })
    }
    //编译元素下属性
    compileEl(node){
        
        let attribute=node.attributes;
        console.log([...attribute]);
        [...attribute].forEach(aa=>{
            let {name,value}=aa
            if(this.isv(name)){
                console.log(name)
                let [,a]=name.split("-")
                let [attributename,]=a.split(":")
                console.log(attributename)
                Util[attributename](node,value,this.vm)
            }

        })
    }
    //编译文本
    compileText(node){
        let content=node.textContent
        //判断文本节点里是否有{{}}
        if(/\{\{(.+?)\}\}/.test(content)){
            Util["text"](node,content,this.vm)
        }
    }
    //判断是否是元素节点
    isEl(el){
        return el.nodeType==1
    }
    //判断属性名是否是以v-开头
    isv(name){
        return name.startsWith("v-")
    }
}
Util={
    text(node,value,vm){
        let val=value.replace(/\{\{(.+?)\}\}/,(...res)=>{
            new Watcher(vm,res[1],(newVal)=>{
                node.textContent=newVal
            })
           return  this.getVal(res[1],vm)
        })
        node.textContent=val
    },
    getVal(val,vm){
        console.log(val.split("."))
        return val.split(".").reduce((p,n)=>{
            return p[n]
        },vm.$data)
    },
    model(node,value,vm){
        console.log(value)
        new Watcher(vm,value,(newVal)=>{
            node.value=newVal
        })
        let val=this.getVal(value,vm)
        node.value=val
        node.addEventListener('input',(e)=>{
            console.log(1)
            let v= e.target.value;
            console.log(v)
            this.setVal(vm,value,v)
        })
    },
    setVal(vm,name,value){
        name.split(".").reduce((p,item,index,arr)=>{
            console.log(arr)
            if(index==arr.length-1){
                
                return p[item]=value
            }
            return p[item]
        },vm.$data)
    }
}
class Dep{
    constructor(){
        this.subjects=[] //储存观察者
    }
    addSub(watcher){
        this.subjects.push(watcher)
    }
    publish(){
        this.subjects.forEach(item=>{
            item.update()
        })
    }
}
class Watcher{
    constructor(vm,val,callback){
        this.vm=vm
        this.val=val
        this.callback=callback
        this.oldVal=this.get()
    }
    get(){
        Dep.target=this
        let value=Util.getVal(this.val, this.vm)
        Dep.target=null
        return value
    }
    update(){
        let newVal=Util.getVal(this.val,this.vm)
        if(newVal!=this.oldVal){
            this.callback(newVal)
        }
    }
}