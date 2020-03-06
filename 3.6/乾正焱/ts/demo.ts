// ts中的数据类型 number string boolean enum null undefined tuple void never any
// let str:number|string = 'abc'
// let arr1:Array<number> = [1,2,3]
// let arr2:Array<string> = ['a','b','c']
// let tuple:[string,number] =['a',1]//元祖 大于等于两种类型的数据就叫元祖

// 枚举
// enum Flag {a,b=2,c=1,d}
// let f1:Flag=Flag.a;
// let f2:Flag=Flag.b;
// let f3:Flag=Flag.c;
// let f4:Flag=Flag.d;
// console.log(f1,f2,f3,f4)

// enum Color {red,blue,yellow='yellow'};
// let a:Color = Color.red;
// let b:Color = Color.blue;
// let c:Color = Color.yellow;
// console.log(a,b,c)//赋值了等于结果，未赋值等于下标且被赋值的后面都必须赋值

// let num:number|string|null|undefined= null;
// let num1:any = undefined;
// let flag:boolean = true;

// never 从来不出现的值 子类null undefined
// let a:never;
// a=(()=>{
//     throw new Error('错误')
// })()
// console.log(a)

// ts中函数 ES5
// function f(){}//命名函数
// let f1 = function(){}//匿名函数

// 可选参数 ?
// function f(name:string,age?:number):string{
//     return `${name}${age}`;
// }
// console.log(f('qzy',20))

// 剩余参数 rest参数 ...
// function sum(...args:number[]):number{
//     let sumNum = 0;
//     args.forEach(item=>{
//         sumNum += item;
//     })
//     return sumNum;
// }
// console.log(sum(1,3,4,5,6))

// 重载 方法名相同，参数不同
// function getInfo(name:string):string;
// function getInfo(age:number):number;
// function getInfo(str:any):any{
//     if(typeof str === 'string'){
//         alert('名字：'+ str);
//     }else if(typeof str === 'number'){
//         alert('年龄：'+ str);
//     }
// }
// getInfo('qzy')
// getInfo(20)

// ts中的类 ES6
// class Person{
//     name:string;
//     age:number;
//     constructor(name:string,age:number){
//         this.name = name;
//         this.age = age;
//     }
// }
// class Web extends Person{
//     flag:boolean;
//     constructor(name:string,age:number,flag:boolean){
//         super(name,age);
//         this.flag = flag;
//     }
// }
// let p = new Person('乾正焱',20);
// let w = new Web('乾正焱',20,true)
// console.log(w)

// 静态方法的应用
// class Base{
//     element:string;
//     css:any;
//     constructor(){
//         this.element = '获取dom节点';
//         this.css = function(arr,value){
//             this.element.style.arr = value;
//         }
//     }
//     static $(element:any):any{
//         return new Base();
//     }
// }
// console.log(Base.$('box').css("color",'red'))

// 面向对象的三大特征 封装 继承 和 多态；
// 多态
// class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){
//         alert(this.name);
//     }
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name);
//     }
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name);
//     }
// }
// let animal = new Animal('lucky');
// let eat = animal.eat();
// let dog = new Dog('狗');
// let cat = new Dog('猫');
// // console.log(dog,cat)
// console.log(eat)

// 抽象
// 含有抽象方法的类一定是抽象类，抽象类中可以包含普通方法
// abstract class Animal{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     abstract eat():any
// }
// class Dog extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     eat(){}
// }
// class Cat extends Animal{
//     constructor(name:string){
//         super(name);
//     }
//     eat(){}
// }

// 接口 参数接口
// interface FullName{
//     fName:string,
//     sName?:string
// }
// function pName(name:FullName):void{
//     alert(name.fName + name.sName);
// }
// let obj = {
//     fName:"lucky",
//     sName:"qq.com"
// }
// pName(obj)

// 方法接口
// interface Arr{
//     [index:number]:number
// }
// let arr:Arr = [1,2,3];
// alert(arr);

// interface obj{
//     [index:string]:string
// }
// let arr:obj = {name:"qianzhengyan",age:"20"};
// alert(arr.name);
// alert(arr.age);

// 类接口
// interface First{
//     name:string;
//     eat(str:string):string
// }
// class Second implements First{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     eat(){return '123'}
// }
// console.log(new Second('lucky').eat())

// private public protent 访问修饰符
// private 只能在本类中调用
// public 在哪调用都可以
// protent 只能在父子类或本类中使用
// class Person{
//     name:string;
//     constructor(name:string){
//         this.name = name;
//     }
//     private set(age:number):number{return age};
//     say(){
//         let p = new Person('lili');
//         console.log(p)
//     }
// }
// class Alone extends Person{
//     say(){
//         alert(this.name)
//     }
// }
// let p = new Person('lucky');
// console.log(p.set(23))
// console.log(p.say())
// let a = new Alone('lucky');
// console.log(a.say())

// 类范型
// class MinClass<T>{
//     list:Array<T> = [];//存放数据
//     add(num:T){
//         this.list.push(num);//把数据存放在list里面
//     }
//     min():T{
//         let minNum = this.list[0];
//         for(let i=1;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                 minNum = this.list[i];
//             }
//         }
//         return minNum;
//     }
// }
// let m = new MinClass();//实例化
// m.add("c");
// m.add("A");
// m.add("e");
// m.add("a");
// alert(m.min())

// 函数范型
// function MinClass(arr:any){
//     let minNum = arr[0];
//         for(let i=1;i<arr.length;i++){
//             if(minNum>arr[i]){
//                 minNum = arr[i];
//             }
//         }
//         return minNum;
// }
// let m = MinClass(['w','e','a','A']);//实例化
// console.log(m)