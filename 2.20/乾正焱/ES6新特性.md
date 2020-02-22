- **表达式**：
- **内置对象**：
- **语句与运算**：
- **异步编程**：

### **声明**

- **const命令**：声明常量
- **let命令**：声明变量

> 作用

- let const 没有变量提升，具有块级作用域


> 重点难点

```javascript
//变量提升
console.log(a) //hello  var 具有变量提升的效果
var a = "hello";

console.log(b,c) //a is not defined  let const 不具备变量提升的效果
let b = "hello"; 
const c = "hello";

//暂时性死区
var aa = "123";
if(true){
    aa = "456";
    let aa;
}
console.log(aa)

```

### **变量解构赋值**

```javascript
//变量包括

```

- **对象解构**

  ```javascript
  //提取Math对象中的log, sin, cos属性
  let {a,...b} = {a:1,y:2,z:3}
  console.log(a,b) // 1 {y:2,z:3}
  ```

- **数组解构**

  - 例子：
  let [x,y,...z] = [1,2,3,4,5];
console.log(x,y,z)  // 1 2 [3,4,5]

- **函数参数解构**

- - 数组解构：
function arrSum([x=1,y=2]){
    console.log(x+y);
}
arrSum([])//3
arrSum([4,5])//9


  - 对象解构：
  let {aa,bb} = {aa:1,bb:2};
console.log(aa,bb)//1 2

  

> 应用场景

- 列举两个

### **字符串扩展**
let str = "Hello"
if(str.startsWitch("H")){
    console.log('111')
}else{
    console.log('222')
}
- **startsWith()**：什么作用
检验字符串首字母是否为大写
- **endsWith()**：什么作用
检验字符串尾字母是否小写

### **对象扩展**

```javascript
//用Object.assign()扩展对象
let obj = {a:1}
let obj1 = {b:2,c:3};
let obj2 = {d:4,e:5}
let res = Object.assign({},obj,obj1);
let res1 = Object.assign(obj1,obj2,obj);
console.log(res,"res"); //{ a: 1, b: 2, c: 3 } 'res'
console.log(res1,"res1") //{ b: 2, c: 3, d: 4, e: 5, a: 1 } 'res1'

```

### **数组扩展**

```javascript
//扩展运算符(...)与rest参数的区别
function add(...values){   //...values  rest运算符
    let sum = 0;
    for(let val of values){
        sum += val;
    }
    return sum;
}
console.log(add(1,2,3));

let {x,y,...z} = {x:1,y:2,a:3,b:4}//...运算符
console.log(x,y,z);

//举例克隆数组：
let a = [1,2,3];
let b = a;
console.log(b)//[1,2,3]

//举例合并数组：
let a = [1,2,3];
let b = [4,5,6];
let c = a.concat(b)
console.log(c)//[ 1, 2, 3, 4, 5, 6 ]

//举例拼接数组：
let a = [1,2,3];
let b = [4,5,6];
b.forEach(item=>{
    a.push(item)
})
console.log(a)//[ 1, 2, 3, 4, 5, 6 ]

```

### Symbol

```javascript
//消除魔法字符串
function getarea(shape,options){
    let area = 0;
    switch(shape){
       case "string":
           area = .3*options.width*options.height;
           break;
    }
    return area;
}
const res = getarea("string",{width:100,height:100})
console.log(res)//3000

```

### **Set**

```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
let a = new Set();
let arr = [2,3,4,5,2,5,4];
arr.forEach(item=>a.add(item));
for(key of a){
    console.log(key) //2,3,4,5
}

```

### **WeakSet**

> 应用场景
<!-- new Map() -->
let arr = new Map([
    [1,"first"],
    [2,"second"],
    [3,'third']
])
for(key of arr.keys()){
    console.log(key)//1 2 3 
}
for(key of arr.values()){
    console.log(key)//first second third
}

- 

### **Class**

```javascript
//ES5 实现 Person构造函数 参数name age 方法toString
function Person(name,age){
    this.name = name;
    this.age = age;
}
Person.prototype.toString = function(){
    return '姓名：'+this.name + ',年龄：' +this.age
}
console.log(new Person('乾正焱',20)) 
//Person { name: '乾正焱', age: 20 }

//ES6 实现 Person构造函数 参数name age 方法toString
class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    toString(){
        return '姓名：'+this.name +',年龄：' +this.age
    }
}
console.log(new Person('乾正焱',20))
// Person { name: '乾正焱', age: 20 }

```

### **Module**

- 命令

- - **export**：规定模块对外接口 以'react'为例

  - - **默认导出**：exprot default 
    - **单独导出**：export
    - **按需导出**：export {header}
    - **改名导出**：export {name as username}

- - **import**：导入模块内部功能 以'react'为例

  - - **默认导入**：import react from "react"
    - **整体导入**：import * as React from 'react'
    - **按需导入**：import {button,input} from "./"
    - **改名导入**：import {button as btn} from "./"
    - **复合导入**：import react , {Component} from "react"
