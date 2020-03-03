//1:编写call⽅法 apply⽅法需要写注释


// call方法接收两个参数，一个是函数运行的作用域（this），另一个是函数传入的参数
let obj = {
    name: 'zhangsan'
}
Function.prototype.call = function (...arg) {
    let one = [...arg][0]
    one.fn = this // 注意，这里的this指向的是调用call的函数
    let result = one.fn(...[...arg].slice(1)) // 将后续的参数传入函数，在这一步实现了this指向传入的第一个参数
    delete one.fn // 别忘了删掉增加的属性
    return result
}
function a(...args) {
    console.log(this.name, "222")
    console.log(...args, "2222")
}
a.call(obj, 1, 2)


//bind
var obj = {
    name: 'aaa',
    age: 18,
    say: function (a, b, c) {
        console.log(this.name, a, b, c);
    }
}
var obj2 = {
    name: 'bbb',
}
Function.prototype.myApply=function(that, argu){
    that = that || window; //如果没有传默认window
    var fn = this; //say函数
    var fnName = this.name + new Date() * 1; //保证say函数的唯一性
    that[fnName] = fn; //在that对象上添加一个函数
    that[fnName](...argu); //执行函数
    delete that[fnName]; //用完就删除
}
obj.say.myApply(obj2, [1, 2, 3]);


//编写Observer类
class Subject{
    constructor(name){
        this.name=name;
        this.observers=[];
        this.start="观察者模式"
    }
    attach(observer){//订阅
        this.observers.push(observer)
    }
    setState(newState){//发布
        this.state = newState
        this.observers.forEach(o => o.update(newState))
    }
}

class Observer{//观察者
    constructor(name){
        this.name = name
    }
    update(newState){
        console.log(this.name,"观察到:",newState)
    }
}
let sub = new Subject("被观察者")
let o1 = new Observer("观察者1")
let o2 = new Observer("观察者2")
sub.attach(o1)
sub.attach(o2)
sub.setState("哈哈哈噜噜噜")




//编写⼀个⽅法将节点放⼊内存中
class Complie{
    constructor(el,vm){
        this.el = this.isElementNode(el)?el:document.querySelector(el)
        this.vm = vm;
        let fragment = this.node2fragment(this.el);
        this.complie(fragment)
        this.el.appendChild(fragment)
    }
    
    isElementNode(node){
        return node.nodeType === 1
    }
    
    node2fragment(node){
        let fragment = document.createDocumentFragment();
        let firstChild;
        while(firstChild = node.firstChild){
            fragment.appendChild(firstChild)
        }
        return fragment
    }
    complie(node){
        let childNodes = node.childNodes;
        [...childNodes].forEach(child => {
            if(this.isElementNode(child)){
                this.complieElement(child)
                this.complie(child)
            }else{
                
                this.complieText(child)
            }
        })
    }
    complieElement(node){
        
    }
    complieText(node){
       
    }
}
class Vue{
    constructor(options){
        this.el = options.el;
        this.data = options.data;
        if(this.el){
            new Complie(this.el,this)
        }
    }
}