//第一题

function sayhi(){
    console.log("Hello",this.name)
}

var person={
    name:"Person姓名",
    sayHi:sayhi
}

var name="全局变量";
var Hi=person.sayHi;
Hi();
//输出的结果 Hello  undefind  
//因为 没有name这个属性，Hi指的是person.sayHi 而在person里面sayHi指的是sayHi()方法 方法里面没有name这个属性


//第二题

function sayHi(){
    console.log('Hello',this.name)
}
var person1={
    name:"Person的值",
    sayHi:function(){
        setTimeout(function(){
            console.log("Hello",this.name)
        })
    }
}
var person2={
    name:"Person2的值",
    sayHi:sayHi
}
var name="全局变量name"

person1.sayHi()//Hello undefined 
// 因为 sayHi()方法里面没有 name这个属性

setTimeout(person2.sayHi,100) //Hello undefined
// 因为setTimeout()没有改变this指向  sayHi()方法里面没有 name这个属性

setTimeout(function(){
    person2.sayHi()
},200)

// Hello Person2的值 
// 因为this指向的就是person2，它里面的name就是Person2

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
Hi.call(person)//hello Person 名字
//因为 call改变了this的指向 所以是Hello person

//第四题
function sayHi() {
    console.log('Hello,', this.name)
}
var person = {
    name: 'Person的值',
    sayHi: sayHi
}
var name = '全局的名字'
var Hi = function (fn) {
    fn();
}
Hi.call(person,person.sayHi);//Hello,undefind
//因为this指向sayHi sayHi没有name 把call赋给了sayHi但里面没有改变this指向

//第五题
function sayHi() {
    console.log('Hello,',this.name);
}
var person = {
    name: 'Person的值',
    sayHi: sayHi
}
var name = '全局变量的值';
var Hi = function (fn) {
    fn.call(this);
}
Hi.call(person, person.sayHi)//Hello, Person的值
//因为this指向sayHi

//第六题
var obj = {
    Hi:function(){
        console.log(this)
        return ()=>{
            console.log(this)
        }
    },
    sayHi:function(){
        return function(){
            console.log(this)
            return ()=>{
                console.log(this)
            }
        }
    },
    say:()=>{
        console.log(this)
    }
}
let hi=obj.Hi()
hi()
let sayhi=obj.sayHi()
let fun1=sayhi()
fun1()//报错
obj.say()

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
let sayHi = obj.sayHi();
let fun1 = sayHi();
fun1();//window windom
let fun2 = sayHi.bind(obj)();
fun2();//报错 