let arr = [5, 4, 3, 2, 1,9,8,7,6]

//冒泡排序
function BubbleSort(arr) {
    let n = 0;
    const {length} = arr
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - 1 - i; j++) {
            sum = n + 1
            n++
            arr[j] > arr[j + 1] ? [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] : ''
        }
    }
    return arr
}
// console.log(BubbleSort(arr))
//  4 5 3 2 1
//  4 3 5 2 1
//  4 3 2 5 1
//  4 3 2 1 5
//  3 4 2 1 5
//  3 2 4 1 5
//  3 2 1 4 5
//  2 3 1 4 5
//  2 1 3 4 5
//  1 2 3 4 5

//选择排序
function selectSort(arr){
    let {length} = arr
    for(let i=0;i<length-1;i++){
        let min = i; 
        for(let j=i+1;j<length;j++){
            if(arr[min]>arr[j]){
                min = j;
            }
        }
        i!=min?[arr[i],arr[min]] = [arr[min],arr[i]]:''
            
        
    }
    return arr
}
// console.log(selectSort(arr))
// 5 4 3 2 1
// 1 4 3 2 5
// 1 2 3 4 5




function insertSort(arr){
    const {length} = arr;
    for(let i=1;i<length;i++){
        let j = i;
        temp = arr[i];
        while(j>0&&arr[j-1]>temp){
            arr[j] = arr[j-1];
            j--
        }
        arr[j] = temp;
    }
    return arr;
}
// console.log(insertSort(arr))
// 4 5 3 2 1
// 3 4 5 2 1
// 2 3 4 5 1
// 1 2 3 4 5


//快速排序
function quickSort(arr=[]){
    if(arr.length <= 1){
        return arr
    }
    let provit = arr[0];
    let left = [];
    let right = [];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<=provit){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    let l = quickSort(left);
    let r = quickSort(right);
    console.log(l,provit,r)
    return l.concat(provit).concat(r)
}
console.log(quickSort(arr))
