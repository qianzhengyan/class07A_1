- 什么叫轮询？


### **Promise**

- 状态
  - pending 进行中
  - resolve 已成功
  - reject  已失败


| 宏队列 |
| :----: |
| 用来保存待执行的宏任务 例如：定时器，axios的回调|
| setTimeout(()=>{console.log('setTimeout宏队列')},200) |
| setInterval(()=>{console.log('setInterval宏队列')},200) |

| 微队列 |
| :----: |
| 用来保存待执行的微任务，例如Promise 回调    |
<!-- | new Promise((resolve,reject)=>{console.log('promise宏队列')}).then(data=>{console.log('promise调用data方法，微队列')})     | -->

> 例题

- EXP1: 在主线程上添加宏任务与微任务
console.log("============start=============")
setTimeout(() => {
    console.log("setTimeout宏队列！");
},0)
new Promise((resolve)=>{
    for(let i=0;i<5;i++){
        console.log(i)
    }
    resolve();
}).then(data=>{
    console.log(data,"Promise调用.then方法")
}).catch(e=>{
    console.log("Promise调用.catch方法")
}).finally(()=>{
    console.log("Promise调用.finally方法")
})
console.log("============end=============")
```javascript

```

- EXP2: 宏任务中创建微任务

setTimeout(() => {
    console.log("setTimeout宏队列！");
    new Promise(()=>{
        console.log("Promise主线程")
    }).then(data=>{
        console.log(data,"Promise调用.then方法")
    }).catch(e=>{
        console.log("Promise调用.catch方法")
    }).finally(()=>{
        console.log("Promise调用.finally方法")
    })
}, 300);

```javascript
 
```

### **Iterator**

```javascript
//实现Iterator，并且注释讲解原理
// let obj = {name:'xx',age:18}
// for(let key of obj){
//    console.log(key)
// }

// 迭代器原理：创建一个指针对象，刚开始指向第一个元素，后面调用next函数，指针向后移动，直至指向最后一个
const data = {
    0:"xx",
    1:"18",
    [Symbol.iterator]:function(){
        let self = this;
        let index = 0;
        return {
            next:function(){
                if(index<Object.keys(data).length){
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
for(let key of data){
    console.log(key)
}

```

### **Generator**

```javascript
// generator原理：创建一个指针对象，刚开始指向第一个元素，后面调用next函数，指针向后移动，直至指向最后一个
//实现大象放进冰箱的步骤，并且注释讲解原理
const start = (success)=>{
    setTimeout(() => {
        console.log('开始');
        success()
    }, 500);
}
const frist = (success)=>{
    setTimeout(() => {
        console.log('第一步，打开冰箱门');
        success()
    }, 500);
}
const second = (success)=>{
    setTimeout(() => {
        console.log('第二步，把大象放进冰箱门');
        success()
    }, 500);
}
const third = (success)=>{
    setTimeout(() => {
        console.log('第三步，关闭冰箱门');
        success()
    }, 500);
}
const end = (success)=>{
    setTimeout(() => {
        console.log('结束');
        success()
    }, 500);
}

// 流量控制
function fun(fn){
    const gen = fn();
    const success = ()=>{
        let result = gen.next();
        if(result.done){//截止条件
            return;
        }
        result.value(success)
    }
    success();
}

function* test(){
    yield start;
    yield frist;
    yield second;
    yield third;
    yield end;
}
fun(test);
```

### **Async await**

```javascript
//实现大象放进冰箱的步骤，并且注释讲解原理
const start = ()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('开始');
            resolve()
        }, 500);
    })
}
const frist = ()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('第一步，打开冰箱门');
            resolve()
        }, 500);
    })
}
const second = ()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('第二步，把大象放进冰箱门');
            resolve()
        }, 500);
    })
}
const third = ()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('第三步，关闭冰箱门');
            resolve()
        }, 500);
    })
}
const end = ()=>{
    return new Promise(resolve=>{
        setTimeout(() => {
            console.log('结束');
            resolve()
        }, 500);
    })
}

// async 必须跟await一起使用 await后面必须是promise对象
async function test(){
    await start();
    await frist();
    await second();
    await third();
    await end();
}
test();

```

