// // 冒泡排序
// function paoSort(arr){
//     let n=0
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//            if(arr[i]>arr[j]){
//             [arr[i],arr[j]]=[arr[j],arr[i]]
//            }
//         }
//     }
//     return {arr,n}
// }
// console.log(paoSort([3,5,8,2,7]))

// 选择排序

// function chooseSort(arr){
//     let min=0
//     for(let i =0;i<arr.length;i++){
//         min=i
//         for(let j=i+1;j<arr.length;j++){ 
//             if(arr[min]>arr[j]){
//                 min=j        //找到最小值
//             }
//         }
//         if(min!=i){  //如果最小值的下标和当前下表不一样就换位置
//             [arr[i],arr[min]]=[arr[min],arr[i]]
//         }
        
//     }
//     return arr
// }
// console.log(chooseSort([3,5,8,2,7]))

// // 插⼊排序
// function insertSort(arr){
//     for(let i =1;i<arr.length;i++){
//         let val=arr[i]
//         let j=i
//       while(arr[j-1]>val&&j>0){  // 把大值一步一步往后替换  
//             arr[j]=arr[j-1]
//             j--
//         }
//         arr[j]=val   
//     }
//     return arr
// }
// console.log(insertSort([3,5,8,2,7]))

// 快速排序
function qSort(arr){
    if(arr.length<=1){ //结束条件   当只有一个或没有符合条件的时候停止 返回数组
        return arr
    }
    let left=[]
    let right=[]
    let item=arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=item){
            left.push(arr[i])   //以数组第一项为界限  小于它的加入一个数组
        }else{
            right.push(arr[i]) // 大于它的加入一个数组
        }   
    }
    let l=qSort(left)  //递归  不停调用自身  将左数组传入  
    let r=qSort(right)  //递归  不停调用自身  将右数组传入
    return l.concat(item).concat(r) // 将左边的数组和中间为界限的一项和右边数组合并  实现排序 
}
console.log(qSort([3,5,8,2,7]))