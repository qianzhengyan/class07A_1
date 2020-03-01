// 冒泡排序
let arr= [5,3,6,1,8,4,7];
function Slow(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
// console.log(Slow(arr))//[ 1, 3, 4, 5, 6, 7, 8 ]

function Fast(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}
// console.log(Fast(arr))//[ 1, 3, 4, 5, 6, 7, 8 ]

// 选择排序
function Choose(arr){
    for(let i=0;i<arr.length;i++){
        let indexMin = i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[indexMin]>arr[j]){
                indexMin =j
            }
        }
        if(indexMin!=i){
            [arr[i],arr[indexMin]] = [arr[indexMin],arr[i]]
        }
    }
    return arr;
}
// console.log(Choose(arr));//[ 1, 3, 4, 5, 6, 7, 8 ]

// 插入排序
function insertSort(arr){
    for(let i=1;i<arr.length;i++){
        let j=i;
        let temp = arr[i];
        while(j>0&&arr[j-1]>temp){
            arr[j] = arr[j-1];
            j--;
        }
        arr[j]=temp;
    }
    return arr;
}
// console.log(insertSort(arr));

// 快速排序
function Quick(arr){
    if(arr.length<=1){
        return arr;
    }
    let first = arr[0];
    let left = [];
    let right = [];
    for(let i = 1;i<arr.length;i++){
        if(first>=arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i]);
        }
    }
    let l = Quick(left);
    let r = Quick(right)
    return l.concat(first).concat(r)
}
console.log(Quick(arr));

