class Dep{
    constructor(){
        this.orders = [];
    }
    addOrder(watch){
        this.orders.push(watch)
    }
    notify(){
        this.orders.forEach(item=>{
            item.update()
        })
    }
}
class Watch{
    constructor(vm,value,callback){
        this.vm = vm;
        this.value = value;
        this.callback = callback;
        this.oldData = this.get()
    }
    get(){
        Dep.target = this
        let value = ComplieUtil.getValue(this.vm,this.value);
        Dep.target = null;
        return value;
    }
    update(){
        let newValue = ComplieUtil.getValue(this.vm,this.value);
        if(newValue !== this.oldData){
            this.callback(newValue);
        }
    }
}
class Observer{
    constructor(data){
        this.observer(data);
    }
    observer(data){
        if(data&&typeof data === 'object'){
            for(let key in data){
                this.defineReactive(data,key,data[key])
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value);
        let dep = new Dep();
        Object.defineProperty(obj,key,{
            get(){
                Dep.target && dep.addOrder(Dep.target);
                return value;
            },
            set:(newValue)=>{
                console.log(newValue,"newValue");
                if(newValue != value){
                    this.observer(newValue);
                    value = newValue;
                    dep.notify()
                }
            }
        })
    }
}
class Complie{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        this.vm = vm
        let fragment = this.goToFragment(this.el)
        this.complie(fragment);
        this.el.appendChild(fragment)
    }
    isElementNode(node){
        return node.nodeType === 1;
    }
    goToFragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild=node.firstChild){
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    complie(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(item=>{
            if(this.isElementNode(item)){
                this.complieElement(item);
                this.complie(item);
            }else{
                this.complieText(item);
            }
        })
    }
    isDirective(name){
        return name.startsWith('v-')
    }
    complieElement(node){//处理元素节点
        let attributes = node.attributes;
        [...attributes].forEach(item=>{
            let {name,value} = item;
            if(this.isDirective(name)){
                let [,directive] = name.split('-')
                let [directiveName,] = directive.split(':');
                ComplieUtil[directiveName](node,value,this.vm)
            }
        })
    }
    complieText(node){
        let content = node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)){
            ComplieUtil['text'](node,content,this.vm)
        }
    }
}
ComplieUtil={
    model(node,value,vm){
        let fn = this.updater['modelUpdater'];
        new Watch(vm,value,(newValue)=>{
            fn(node,newValue);
        })
        let value1 = this.getValue(vm,value);
        fn(node,value1);
        node.addEventListener('input',(e)=>{
            let value1 = e.target.vlaue
            this.setValue(vm,value,value1);
        })
    },
    getValue(vm,value){
        return value.split('.').reduce((data,current)=>{
            return data[current]
        },vm.data)
    },
    setValue(vm,value,value1){
        value.split('.').reduce((data,current,index,arr)=>{
            if(index === arr.length - 1){
                return data[current] = value1;
            }
            return data[current]
        },vm.data)
    },
    text(node,content,vm){
        let fn = this.updater["textUpdater"]
        let value = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            new Watch(vm,args[1],(newValue)=>{
                fn(node,newValue);
            })
            return this.getValue(vm,args[1])
        })
        fn(node,value)
    },
    updater:{
        modelUpdater(node,value){
            node.value = value;
        },
        textUpdater(node,value){
            node.textContent = value;
        }
    }
}
class Vue{
    constructor(options){
        this.el = options.el;
        this.data = options.data;
        if(this.el){
            new Observer(this.data);
            new Complie(this.el,this);
        }
    }
}