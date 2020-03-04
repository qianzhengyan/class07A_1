// 数据劫持 把数据属性转化为访问器属性
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
        this.observer(value);//递归 循环调用
        Object.defineProperty(obj,key,{
            get(){
                return value;
            },
            set(newValue){
                console.log(newValue,"newValue");
                if(newValue != value){
                    this.observer(newValue);//补充
                    value = newValue;
                }
            }
        })
    }
}

// 实现v-model的效果
class Complie{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        this.vm = vm;//确保所有人都能够拿到vm
        let fragment = this.goToFragment(this.el);//把元素节点放入内存中
        // 用数据编译模板
        this.complie(fragment);
        this.el.appendChild(fragment);//把内容展现在页面上
    }
    isElementNode(node){//判断该节点是否为元素节点 元素节点nodeType=1
        return node.nodeType === 1;
    }
    goToFragment(node){//把node节点下的所有子节点都放入内存中
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild=node.firstChild){
            // appendChild具有移动性
            fragment.appendChild(firstChild);
        }
        return fragment;
    }
    complie(node){//核心编译方法
        let childNodes = node.childNodes;//node元素下的所有子节点
        [...childNodes].forEach(item=>{
            if(this.isElementNode(item)){
                // 是元素节点
                this.complieElement(item);
                this.complie(item);//遍历item下的子节点
            }else{
                // 处理文本节点
                this.complieText(item);
            }
        })
    }
    isDirective(name){
        return name.startsWith('v-')
    }
    complieElement(node){//处理元素节点
        let attributes = node.attributes;
        // console.log(attributes,'000')[type,v-model]
        [...attributes].forEach(item=>{
            // console.log(item)//[type:'text',value:'className.name']
            let {name,value} = item;
            if(this.isDirective(name)){//v-mode:
                let [,directive] = name.split('-');//model
                let [directiveName,] = directive.split(':');
                // 优化model
                ComplieUtil[directiveName](node,value,this.vm)
            }
        })
    }
    complieText(node){//处理文本节点{{className.name}}
        let content = node.textContent;//获取文本节点的内容
        if(/\{\{(.+?)\}\}/.test(content)){
            //"{{className.name}}"
            ComplieUtil['text'](node,content,this.vm)
        }
    }
}
ComplieUtil={
    model(node,value,vm){
        // node是input框 value是className.name
        let value1 = this.getValue(vm,value);
        let fn = this.updater['modelUpdater'];
        fn(node,value1);
    },
    getValue(vm,value){//获取className.name的值
        return value.split('.').reduce((data,current)=>{
            return data[current];//className.name值
        },vm.data)
    },
    text(node,content,vm){
        // let value = content.replace(/\{\{(.+?)\}\}/g,(...regs)=>{
        //     return this.getValue(vm,args[1])
        // })
        // console.log(value,'value');
        // this.updater['textUpdater'](node,value)
        let value = content.replace(/\{\{(.+?)\}\}/g,(...args)=>{
            // console.log(args)
            return this.getValue(vm,args[1])
        })
        // console.log(value,"value")
        let fn = this.updater["textUpdater"]
        fn(node,value)
    },
    updater:{
        // 改变input里面的value值
        modelUpdater(node,value){
            node.value = value;
        },
        // 改变文本内容
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
            // 数据劫持 把数据属性转化为访问器属性
            new Observer(this.data);
            // 实现v-model的效果
            new Complie(this.el,this);
        }
    }
}