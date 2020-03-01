//第⼀题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person姓名',
    sayHi: sayHi
}
var name = '全局变量';
var Hi = person.sayHi;
Hi();

//第⼆题
function sayHi() {
    console.log('Hello,', this.name);
}
var person1 = {
    name: 'Person1的值',
    sayHi: function () {
        setTimeout(function () {
            console.log('Hello,', this.name);
        })
    }
}
var person2 = {
    name: 'Person2的值',
    sayHi: sayHi
}
var name = '全局变量name';
person1.sayHi(); //Hello, undefined  在setTimeout或者setInterval中this指向window或者全局
setTimeout(person2.sayHi, 100);//Hello, undefined 想当于将person2.sayHi赋值给fn 默认绑定 指window或者全局
setTimeout(function () {
    person2.sayHi();
}, 200);//Hello,Person2的值   隐式绑定 


//第三题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person名字',
    sayHi: sayHi
}
var name = '全局名字';
var Hi = person.sayHi;
Hi.call(person); //Hello,Person名字 call()改变了this指向  原来指向window或者全局现在指向person


//第四题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person的值',
    sayHi: sayHi
}
var name = '全局的名字';
var Hi = function (fn) {
    fn();
}
Hi.call(person, person.sayHi);//Hello, undefined
将person.sayHi当作参数传入  Hi指向person   person.sayHi被赋值给fn 默认绑定

//第五题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person的题',
    sayHi: sayHi
}
var name = '全局变量的值';
var Hi = function (fn) {
    fn.call(this);
}
Hi.call(person, person.sayHi); //Hello, Person的题

第六题
var obj = {
    hi: function () {
        console.log(this);
        return () => {
            console.log(this);
        }
    },
    sayHi: function () {
        return function () {
            console.log(this);
            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}
let hi = obj.hi();
hi();//obj  //obj.hi()调用后里面的this指向obj 返回值是个箭头函数 this是父级的this
let sayHi = obj.sayHi();//返回值是个函数 默认绑定 指向全局
let fun1 = sayHi();
fun1();//全局
obj.say();//obj //指向父级作用域的this  

//第七题
var obj = {
    hi: function () {
        console.log(this);
        return () => {
            console.log(this);
        }
    },
    sayHi: function () {
        return function () {
            console.log(this);
            return () => {
                console.log(this);
            }
        }
    },
    say: () => {
        console.log(this);
    }
}
let sayHi = obj.sayHi();//返回值是个函数 默认绑定 指向全局  箭头函数指向父级this
let fun2 = sayHi.bind(obj)();
fun2();//obj  改变了this指向 指向obj