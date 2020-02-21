- 什么叫轮询？
当第一个异步函数执行完成之后，再到异步队列进行监视，一直循环不断的一个过程

### **Promise**

- 状态
  - pending resolved rejected


| 宏队列 |
| :----: |
|   setTimeout     |
|   setInterval     |

| 微队列 |
| :----: |
|   Promise     |

> 例题

- EXP1: 在主线程上添加宏任务与微任务

```javascript
// console.log("111")
// setTimeout(()=>>{
//   console.log("宏任务")
// })
// new Promise((res,rej)=>{
//     console.log("主线程")
//     res()
// }).then(res=>{
//   console.log("微任务")
// })
```

- EXP2: 宏任务中创建微任务

```javascript
// setTimeout(()=>>{
//   console.log("宏任务")
//   new Promise((res,rej)=>{
//       res()
//    }).then(res=>{
//      console.log("微任务")
//    })
// })
```

### **Iterator**

```javascript
//使let obj = {name:'xx',age:18}
//for(let key of obj){
//    console.log(key)
//}
//实现Iterator，并且注释讲解原理
  let obj = {name:'xx',age:18,[Symbol.iterator]:function(){
      //留住this
      const self=this
      // 声明变量存下标
      let index=0
      return {
        //遍历器的next方法  返回一个关于obj中第一条数据的对象
        next:function(){
          if(index<Object.keys(self)length){
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
  }}
```

### **Generator**

```javascript
//实现大象放进冰箱的步骤，并且注释讲解原理
let fn1=function(success) {
    setTimeout(()=>{
      console.log("打开冰箱")
      success()

    },500)
    
}
let fn2=function(success) {
    setTimeout(()=>{
      console.log("把大象放进去")
      success()
    },500)
    
}
let fn3=function(success) {
  setTimeout(()=>{
      console.log("关上冰箱")
      success()
    },500)
    
}
function* fn(){ //generator 函数
  yield fn1,
  yield fn2,
  yield fn2
}
let run=(fn){
  let gen=fn() //生成Iterator 对象
  let success=()=>{
      let opt=gen.next()  //返回关于第一条数据的对象
      if(opt.done){ //判断对象中的done属性是不是true  如果是表示便利完毕  否则继续遍历
        return ;
      }
      opt[value](success) //递归调用 直到done为true
  }
  success()
}
run(fn)
```

### **Async await**

```javascript
//实现大象放进冰箱的步骤，并且注释讲解原理
let fn1=function() { //返回promise对象
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("打开冰箱")
      res()
    },500)
  })  
}
let fn2=function() {
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("把大象放进去")
      res()
    },500)
  })  
}
let fn3=function() {
  return new Promise((res,rej)=>{
    setTimeout(()=>{
      console.log("关上冰箱")
      res()
    },500)
  })  
}

async fn(){ 
  await fn1(),//等待fn1执行完毕 得到结果后执行下一步
  await fn2(),
  await fn2(),
}
fn()
```

