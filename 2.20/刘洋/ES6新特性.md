- **表达式**：
- **内置对象**：
- **语句与运算**：
- **异步编程**：

### **声明**

- **const命令**：声明常量
- **let命令**：声明变量

> 作用域
分为全局作用域 函数作用域和块级作用域

- 
> 重点难点

```javascript
//变量提升

// let、const没有变量提升
// var有变量提升

//暂时性死区

// 在let、const命令声明变量之前，使用变量会报错，被称为暂时性死区
```

### **变量解构赋值**

```javascript
//变量包括

```

- **对象解构**

  ```javascript
  //提取Math对象中的log, sin, cos属性
  let {log,sin,cos}={log:1,sin:2,cos:3}
  
  ```

- **数组解构**

  - 例子：<!--   const [a,b,c]=[1,2,3] ==>a=1,b=2,c=3 -->
  
    <!--   const [x,...y] = [1,2,3,4] ==>x=1 ,y=[2,3,4]-->

- **函数参数解构**

- - 数组解构：function a(...a){ console.log(a)} ==> a(1,2,3)==> [1,2,3]
  - 对象解构：funciton a({a,b}){ console.log(a,b)} ==> a({a:3,b:2})

> 应用场景

- 列举两个
<!-- let arr = [1, 7, 8, 6, 5, 4, 2, 6, 5, 2, 7]

function a(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length ; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(a(arr)) ==>
[
  1, 2, 2, 4, 5,
  5, 6, 6, 7, 7,
  8
]-->

<!--  function ab(){
//     return [1,2]
// }
// const [a,b]=ab()

// console.log(a,b) ==> 1 2  -->
### **字符串扩展**

- **startsWith()**  ：判断字符串是否在指定的位置以指定的字符串开头
<!-- const str = "Liuyang" -->
<!-- str.startsWith("L") 判断str字符串是否以参数“L”开头 -->

- **endsWith()**：判断字符串是否在指定的位置以指定的字符串结尾
<!-- const str = "Liuyang" -->
<!-- str.startsWith("g") 判断str字符串是否以参数“g”结尾 -->

### **对象扩展**

```javascript
//用Object.assign()扩展对象  是浅拷贝  只能复制指向堆的指针

```

### **数组扩展**

```javascript
//扩展运算符(...)与rest参数的区别  
//  扩展运算符就好像rest参数的逆运算
// console.log(...[1,2,3])=>1 2 3
// function a(...arr){console.log(arr)} 
  //     a(1,2,1) ==> [1,2,3]

//举例克隆数组：
ary.slice()
ary.concat()
//举例合并数组：
arr1.concat(arr2)
//举例拼接数组：
arr1.concat(arr2)
```

### Symbol

```javascript
//消除魔法字符串
let action1={
  type:Symbol(),
  age:12
}
let action2={
  type:Symbol(),
  age:15
}

function fn(opt){
  switch(opt.type){
    case action1.type:
      return 11

    case action2.type:
      return 22
      
  }
}
console.log(fn(action1))
```

### **Set**

```javascript
//[2, 3, 5, 4, 5, 2, 2]去重
let a=[2, 3, 5, 4, 5, 2, 2]
let arr=new Set([2, 3, 5, 4, 5, 2, 2])
console.log([...arr])==>[ 2, 3, 5, 4 ]
```

### **WeakSet**

> 应用场景
存储DOM节点时候，DOM节点移动或者删除，不用担心节点从文档中删除引发内存泄漏 DC垃圾回收机制
- 

### **Class**

```javascript
//ES5 实现 Person构造函数 参数name age 方法toString
function fn (name,age){
    this.name=name
    this.age=age
}

fn.prototype.toString=function(){
    return this.name+this.age
}

console.log(new fn(1,2).toString())
//ES6 实现 Person构造函数 参数name age 方法toString
class fn{
    constructor (name,age){
        this.name=name
        this.age=age
    }
    toString(){
        return this.name+this.age
    }
}
console.log(new fn(3,3).toString())
```

### **Module**

- 命令

- - **export**：规定模块对外接口 以'react'为例

  - - **默认导出**：export default 
    - **单独导出**：export
    - **按需导出**：export {a}
    - **改名导出**：export {a as b}

- - **import**：导入模块内部功能 以'react'为例

  - - **默认导入**：import Index from "./"
    - **整体导入**：import * as react from 'react';
    - **按需导入**：import {Switch} as react from 'react-router-dom';
    - **改名导入**：import {a as b} from './';
    - **复合导入**：import React,{component} from 'react'