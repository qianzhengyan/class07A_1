//第⼀题

// function sayHi() {
//     console.log('Hello,', this.name);
// }
// var person = {
//     name: 'Person姓名',
//     sayHi: sayHi
// }
// var name = '全局变量';
// var Hi = person.sayHi;
// Hi();//hello undefined;
// 思路：这是一个默认this指向，this指向sayHi函数，它里面没有name属性，所以出来结果为undefined；

// 第⼆题
// function sayHi() {
//     console.log('Hello,', this.name);
// }
// var person1 = {
//     name: 'Person1的值',
//     sayHi: function () {
//         setTimeout(function () {
//             console.log('Hello,', this.name);
//         })
//     }
// }
// var person2 = {
//     name: 'Person2的值',
//     sayHi: sayHi
// }
// var name = '全局变量name';
// person1.sayHi();//Hello, undefined  this指向setTimeout函数，它里面没有name属性，所以出来结果为undefined；
// setTimeout(person2.sayHi, 100);//Hello, undefined this指向sayHi函数，他没有name属性，所以结果为hello undefined
// setTimeout(function () {
//     person2.sayHi();//Hello, Person2的值 这是一个隐式指向，this指向person2
// }, 200);
// //第三题
// function sayHi() {
//     console.log('Hello,', this.name);
// }
// var person = {
//     name: 'Person名字',
//     sayHi: sayHi
// }
// var name = '全局名字';
// var Hi = person.sayHi;
// Hi.call(person);//Hello, Person名字 通过.call改变了this的指向，this指向person，person有name
 // //第四题
// function sayHi() {
//     console.log('Hello,', this.name);
// }
// var person = {
//     name: 'Person的值',
//     sayHi: sayHi
// }
// var name = '全局的名字';
// var Hi = function (fn) {
//     fn();
// }
// Hi.call(person, person.sayHi);//Hello,undefined;this指向sayHi
// //第五题
// function sayHi() {
//     console.log('Hello,', this.name);
// }
// var person = {
//     name: 'Person的题',
//     sayHi: sayHi
// }
// var name = '全局变量的值';
// var Hi = function (fn) {
//     fn.call(this);
// }
// Hi.call(person, person.sayHi);//Hello, Person的题 改变this指向，让他指向person，执行person.sayHi
// //第六题
// var obj = {
//     hi: function () {
//         console.log(this);
//         return () => {
//             console.log(this);
//         }
//     },
//     sayHi: function () {
//         return function () {
//             console.log(this);
//             return () => {
//                 console.log(this);
//             }
//         }
//     },
//     say: () => {
//         console.log(this);
//     }
// }
// let hi = obj.hi();
// hi();//输出两次obj 调用obj的hi方法，this指向obj，返回obj
// let sayHi = obj.sayHi();//输出obj对象 隐式this指向，this指向obj对象
// let fun1 = sayHi();//直接调用，this指向window对象
// fun1();//this指向window对象
// obj.say();//{} 因为say方法是一个箭头函数，箭头函数的this指向它本身
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
// let fun1 = sayHi();
// fun1();//输出window对象两次  
let fun2 = sayHi.bind(obj)();
fun2();//输出obj对象两次 通过.bind把this的指向改变成obj