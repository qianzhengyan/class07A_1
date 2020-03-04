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
        Object.defineProperty(obj, key, {
            get() {
                return value
            },
            set: (newVal) => {
                console.log(newVal,"newVal")
                if (newVal !== value) {
                    this.observer(newVal)
                    value = newVal;
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
    model(node,expr,vm){
        let value = this.getVal(vm,expr)
        let fn = this.updater['modelUpdater']
        fn(node,value)
    },
    text(node,expr,vm){
        let value = expr.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            return this.getVal(vm,args[1])
        })
        console.log(value,"value")
        let fn = this.updater["textUpdater"]
        fn(node,value)
    },
    updater:{
        modelUpdater(node,value){
           node.value = value
        },
        textUpdater(node,value){
            node.textContent = value
        }
    }
}

class Vue {
    constructor(options) {
        this.$el = options.el;
        this.$data = options.data;
        if (this.$el) {
            new Complie(this.$el, this)
        }
    }
}