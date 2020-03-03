// 数据劫持 把数据属性变成访问器属性
class Observer{
    constructor(data){
        this.observer(data);
    }
    observer(data){
        // 先判断传入的数据是对象还是空
        if(data && typeof data==='object'){
            for(let key in data){
                // console.log(key,'000')
                this.defineReactive(data,key,data[key]);
            }
        }
    }
    defineReactive(obj,key,value){
        this.observer(value);
        Object.defineProperty(obj,key,{
            get(){
                console.log('get方法');
                return value;
            },
            set(newValue){
                console.log('set方法');
                if(newValue!==value){
                    value = newValue;
                }
            }
        })
    }
}
// 实现v-model效果
class Complie{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el);
        this.vm = vm;//改变this指向
        // 把节点加入到内存中去
        let fragment = this.addToFragment(this.el);
        this.complie(fragment);//编译模板数据
        this.el.appendChild(fragment);//把文档碎片中的内容独处
    }
    isElementNode(node){//判断该元素是否为元素节点
        return node.nodeType === 1;
    }
    addToFragment(node){//把节点存储到内存中 避免多次刷新
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment;
    }
    complie(node){
        let childNodes = node.childNodes;//node节点下面所有的子节点
        // console.log(childNodes,'00')
        [...childNodes].forEach(item=>{
            // 判断节点是否为元素节点
            if(this.isElementNode(item)){//是元素节点
                this.complieElement(item);
                this.complie(item);//递归
            }else{//不是元素节点
                this.complieText(item);//文本节点text
            }
        })
    }
    complieElement(node){//处理元素节点

    }
    complieText(node){//处理文本节点

    }
}
class Vue{
    constructor(options){
        this.el = options.el;
        this.data = options.data;
        if(this.el){
            // definePropety数据劫持
            new Observer(this.data)
            // v-model指令原理 属性节点
            // {{}} 文本节点
            // <标签> 元素节点
            new Complie(this.el,this);
        }
    }
}