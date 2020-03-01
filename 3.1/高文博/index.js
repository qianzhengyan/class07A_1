//第⼀题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person姓名',
    sayHi: sayHi//把sayHifan方法赋给person对象的sayHi属性
}
var name = '全局变量';
var Hi = person.sayHi;//把person对象的sayHi属性赋给变量Hi
Hi();//输出Hello, undefined，因为this的指向没有改变，指向的还是sayHi方法，sayHi方法里没有name
// 第⼆题
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
person1.sayHi();//输出Hello, undefined，this指向是setTimeout中function，该方法没有name
setTimeout(person2.sayHi, 100);//输出Hello, undefined，因为this的指向没有改变，指向的还是sayHi方法，sayHi方法里没有name
setTimeout(function () {
    person2.sayHi();
}, 200);//输出Hello, Person2的值，this指向改为person2，所以输出person2的name
第三题
function sayHi() {
    console.log('Hello,', this.name);
}
var person = {
    name: 'Person名字',
    sayHi: sayHi
}
var name = '全局名字';
var Hi = person.sayHi;
Hi.call(person);//输出Hello, Person名字，call改变this指向
第四题
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
Hi.call(person,person.sayHi);
//输出Hello, undefined，this是函数sayHi，sayHi没有name
//通过call把person赋给Hi，但是里面没有改变this
第五题
function sayHi() {
    console.log('Hello,',this.name);
}
var person = {
    name: 'Person的题',
    sayHi: sayHi
}
var name = '全局变量的值';
var Hi = function (fn) {
    fn.call(this);
}
Hi.call(person, person.sayHi);//输出Hello, Person的题
//call把person赋给Hi，然后又把Hi的this赋给sayHi
//第六题
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
        console.log(this,'qwer');
    }
}
let hi = obj.hi();
hi();//输出两次obj对象，this指向没有改变，箭头函数的this就是父级的this
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();//输出两次window，this指向window
obj.say();
// //第七题
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
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();//输出两次window，return后面的function指向window，箭头函数的this就是父级的this
let fun2 = sayHi.bind(obj)();
fun2();//通过bind把this指向改成obj