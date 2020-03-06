class Dep{
    constructor(){
        this.subs = [] 
    }
    addSub(watcher){
        this.subs.push(watcher)
    }
    notify(){
        this.subs.forEach(watcher => {
            watcher.update()
        })
    }
}
class Watcher{
    constructor(vm,expr,cb){
        this.vm = vm;
        this.expr = expr;
        this.cb = cb;
        this.oldData = this.get()
    }
    get(){
        Dep.target = this
        let value = ComplieUtil.getVal(this.vm,this.expr);
        Dep.target = null
        return value
    }
    update(){
        let newVal = ComplieUtil.getVal(this.vm,this.expr);
        if(newVal !== this.oldData){
            this.cb(newVal)
        }
    }
}
class Observer {
    constructor(data) {
        this.observer(data);
    }
    observer(data) {
        if (data && typeof data === 'object') {
            for (let key in data) {
                this.defineReactive(data, key, data[key]);
            }
        }
    }
    defineReactive(obj, key, value) {
        this.observer(value);
        let dep = new Dep();
        Object.defineProperty(obj, key, {
            get() {
                Dep.target && dep.addSub(Dep.target)
                return value
            },
            set: (newVal) => {
                if (newVal !== value) {
                    this.observer(newVal)
                    value = newVal;
                    dep.notify();
                }
            }
        })
    }
}

class Complie {
    constructor(el, vm) {    
        this.el = this.isElementNode(el) ? el : document.querySelector(el); 
        this.vm = vm;      
        let fragment = this.node2fragment(this.el);       
        this.compile(fragment);   
        this.el.appendChild(fragment) 
    }
    isElementNode(node) {
        return node.nodeType === 1;
    }
    node2fragment(node) {
        let fragment = document.createDocumentFragment();
        let firstChild;
        while (firstChild = node.firstChild) {
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    compile(node) { 
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if (this.isElementNode(child)) {
                this.compileElement(child);
                this.compile(child)
            } else {
                this.compileText(child);
            }
        });
    }
    isDirective(attrName){
        return attrName.startsWith('v-')
    }
    compileElement(node){
        let attributes = node.attributes;
        [...attributes].forEach(attr => {
            let {name,value:expr} = attr;
            if(this.isDirective(name)){
                let [,directive] = name.split('-');
                let [directiveName,] = directive.split(":")
                ComplieUtil[directiveName](node,expr,this.vm)
            }
        })
    }
    compileText(node){
        let content = node.textContent;
        if(/\{\{(.+?)\}\}/.test(content)){
            ComplieUtil['text'](node,content,this.vm)
        }
    }
}
ComplieUtil = {
    getVal(vm,expr){
        return expr.split('.').reduce((data,current)=>{
            return data[current]
        },vm.$data)
    },
    setVal(vm,expr,value){
        expr.split('.').reduce((data,current,index,arr)=>{
            if(index === arr.length - 1){
                return data[current] = value
            }
            return data[current]
        },vm.$data)
    },
    model(node,expr,vm){
        let fn = this.updater['modelUpdater']
        new Watcher(vm,expr,(newVal)=>{
            fn(node,newVal)
        })
        let value = this.getVal(vm,expr)
        fn(node,value)
        node.addEventListener('input',(e)=>{
            let value = e.target.value;
            this.setVal(vm,expr,value)
        })
    },
    text(node,expr,vm){
        let fn = this.updater["textUpdater"]
        let value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            new Watcher(vm,args[1],(newVal)=>{
                fn(node,newVal)
            })
            return this.getVal(vm,args[1])
        })
        fn(node,value)
    },
    updater:{
        modelUpdater(node,value){
           node.value = value
        },
        textUpdater(node,value){
            node.textContent = value
        },
    }
}

class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        if (this.$el) {
            new Observer(this.$data)
            new Complie(this.$el, this)
        }
    }
}