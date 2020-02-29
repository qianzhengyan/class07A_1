- **表达式**：声明 结构赋值
- **内置对象**：字符串扩展 数值扩展  对象扩展  函数扩展  正则扩展 symbol Map Set WeekMao WeekSet Proxy Reflect反射/设计模式  观察者模式
- **语句与运算**：class Module Iterator
- **异步编程**：Promise Generator async

### **声明**
let 变量 const 常量
- **const命令**：声明常量
- **let命令**：声明变量

> 作用

全局作用域 window $axios
函数作用域 function (){}
块级作用域 {}
- 


> 重点难点

```javascript
//变量提升
console.log(foo)
let foo=2
 
//暂时性死区

var tmp=123;
if(true){
  tmp="add";
  let tmp
}
console.log(tmp)
```

### **变量解构赋值**

```javascript
//变量包括
 数组 对象 字符串 数组 布尔 参数
    var let const function class import
```

- **对象解构**

  ```javascript
  var obj = {a:1,b:2,c:3}
    {a,b,c} = obj
    console.log(a,b,c)

  //提取Math对象中的log, sin, cos属性
  
  
  ```

- **数组解构**

  - 例子：
  ```javascript
   var [a,b,c] = 'gjw';
    console.log(a,b,c)

- **函数参数解构**

- - 数组解构：
```javascript
  var arr = ["a", "b", "c"];
var a = arr[0],
    b = arr[1],
    c = arr[2];
console.log(a);

  - 对象解构：

  let { foo, bar } = { foo: "aaa", bar: "bbb" };
  foo 
  bar 

> 应用场景

- 列举两个

var arr=[8,12,45,3,99,0,2];
function sortarr(){
  for(i=0;i<arr.length-1;i++){

        for(j=0;j<arr.length-1-i;j++){

            if(arr[j]>arr[j+1]){

                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }

        }

    }
    return arr
}


### **字符串扩展**

- **startsWith()**：什么作用
判断当前字符串是否是以另外一个给定的子字符串 开头 的 结果是返回true和false 

字符串中的开始位置 0为第一个字符索引值

- **endsWith()**：什么作用
判断字符串是否以指定后缀结尾  结果是返回true和false 

字符中结束位置，1 为第一个字符索引值

### **对象扩展**

//用Object.assign()扩展数组
var aa = {a: 1};
var bb = {b: 2};
var cc = {c: 3};
Object.assign(aa,bb,cc); 
```

### **数组扩展**

```javascript
//扩展运算符(...)与rest参数的区别
const obj={
    name:'郭君强',
    age:'22',
    sex:'男'
}
const {name,age,sex}=obj
console.log(name,age,sex)

//举例克隆数组：

let arr = [1,2,3,4]
let arr1= arr.slice(0)  
arr[0] = 6
console.log(arr)  
console.log(arr1) 

//举例合并数组：

let arr1 = [1, 2, 3];
let arr2 = ['a', 'b'];
arr1.push(arr2);
console.log(arr1);

//举例拼接数组：

let arr = ['tom', 'jerry'];
let arr2 = [1, 2];
for(var i=0; i<arr2.length; i++){
     arr.push(arr2[i])
}
console.log(arr);
```

### Symbol

```javascript
//消除魔法字符串
const shapeType = {
    age: Symbol("age"),
    name: Symbol("name")
}
function getArea(shape,options){ 
    let area = 0;
    switch(shape){
        case shapeType.age:
            area = .5 * options.width * options.height
            break;
    }
    return area
}
const area = getArea(shapeType.age,{width:100,height:100})
console.log(area);

```

### **Set**

```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
let arr=[2,3,4,5,2,2]
let newArr=new Set(arr)
console.log(newArr)
```

### **WeakSet**

> 应用场景
存储Dom节点时候，Dom 节点移动或者删除，不用担心点点从文档中删除引发内存泄漏 Dc垃圾回收机制


### **Class**

```javascript
//ES5 实现 Person构造函数 参数name age 方法toString


function Point(name,age){
  this.name=name;
  this.age=age;
}
Point.prototype.toString=function(){
  return "("+this.name+","+this.age+")"
}

var p=new Point(1,3)
console.log(p)

//ES6 实现 Person构造函数 参数name age 方法toString


class Point{
  constructor(name,age){
    this.name=name;
    this.age=age
  }
  toString(){
    return "("+this.name+","+this.age+")"
  }
}

let p=new Point(1,3)
console.log(p)
```

### **Module**

- 命令

- - **export**：规定模块对外接口 以'react'为例

  - - **默认导出**： export default 
    - **单独导出**：export 
    - **按需导出**：export {name,age}
    - **改名导出**：export {name as username}

- - **import**：导入模块内部功能 以'react'为例

  - - **默认导入**：import Person from "./"
    - **整体导入**：import * as React from "react"
    - **按需导入**： import {name,age} from "./"
    - **改名导入**：import {name as age} from "./"
    - **复合导入**：import React,{component} from "react"
