- 什么叫轮询？

一种请求 响应式的交互作用 即有监视器向代理发出请求  询问它所需要的信息值  代理响应监视器的请求 
### **Promise**

- 状态
  - 
  pending 进行中
  resolved 已成功
  rejected 已失败

| 宏队列 | 
| :----: |
| 用来保存待执行的宏任务(回调) 比如:定时器回调 DOM事件回调  ajax回调   |
|        |

| 微队列 |
| :----: |
|  用来保存待执行的微任务(回调) 比如: promise的回调 MutationObserver的回调      |

> 例题

```javascript
- EXP1: 在主线程上添加宏任务与微任务

setTimeout(() => {
    console.log("setTimeOut")
},0);
new Promise(resolve => {
    for(let i=0;i<5;i++){
        console.log(i)
    }
    resolve()
}).then(()=>{
    console.log("Promise执行then方法")
}).catch(()=>{

}).finally(()=>{
    console.log("finally")
})

- EXP2: 宏任务中创建微任务

 setTimeout(() => {
    console.log("setTimeOut1")
    setTimeout(() => {
        console.log("setTimeOut2")
    }, 0);
    new Promise(resolve => {
        resolve()
        console.log("Promise主")
    }).then(()=>{
        console.log("Promise.then")
    })
}, 0);

### **Iterator**

```javascript
//使let obj = {name:'xx',age:18}
//for(let key of obj){
//    console.log(key)
//}
//实现Iterator，并且注释讲解原理

```
```javascript
let obj={
  0:"name",
  1:"age",
  [Symbol.iterator]:function(){
    const self=this;
    let index=0;
    return {
      next:function(){
        if(index<Object.keys(obj).length){
          return {
            value:self[index++],
            done:false
          }
        }else{
          return {
            value:self[index++],
            done:true
          }
        }
      }
    }
  }
}

 console.log(obj)
### **Generator**

// 
//实现大象放进冰箱的步骤，并且注释讲解原理
 const start = (success) =>{ 
        setTimeout(()=>{
            console.log("准备")
            success()//
        },500)
    }
    const first = (success) =>{
        setTimeout(()=>{
            console.log("第一步 打开冰箱门")
            success()
        },500)
    }
    const second = (success) =>{
        setTimeout(()=>{
            console.log("第二步 把大象放进去")
            success()
        },500)
    }
    const third = (success) =>{
        setTimeout(()=>{
            console.log("第三步 关闭冰箱门")
            success()
        },500)
    }
    const end = (success) =>{
        setTimeout(()=>{
            console.log("结束")
            success()
        },500)
    }

 

### **Async await**
//实现大象放进冰箱的步骤，并且注释讲解原理

const start = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("准备")
            resolve()//
        },500)
    })
}
const first = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第一步 打开冰箱门")
            resolve()//
        },500)
    })
}
const second = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第二步 把大象放进去")
            resolve()//
        },500)
    })
}
const third = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("第三步 关闭冰箱门")
            resolve()//
        },500)
    })
}
const end = () =>{  
    return new Promise(resolve =>{
        setTimeout(()=>{
            console.log("结束")
            resolve()//
        },500)
    })
}
async function task(){
    await start();
    await first();
    await second();
    await third();
    await end();
}
task()

