//冒泡排序

function swap(array,a,b){
    [array[a],array[b]] = [array[b],array[a]]
}   

function bubbleSort(array){
    const {length} = array
    for(let i=0;i<length;i++){
        for(let j=0;j<length-1;j++){
            if(array[j]>array[j+1]){
                swap(array,j,j+1)
            }
        }
    }
    return array
}
let arr = bubbleSort([5,4,3,2,1])
console.log(arr)


//选择排序

function selectSort(array=[]){
    let {length}=array;

    for(let i=0;i<length-1;i++){
        let indexMin=i;
        for(let j=i+1;j<length;j++){
            if(array[indexMin]>array[j]){
                indexMin = j;
            }
        }
        if(i!=indexMin){
            [array[i],array[indexMin]] = [array[indexMin],array[i]]
        }
    }
    return array
}
let arr1 = selectSort([5,4,3,2,1])
console.log(arr1)

//插入排序

function insertSort(array){
    const {length}=array;

    for(let i=1;i<length;i++){
        let j=i;
        temp=array[i]
        while(j>0&&array[j-1]>temp){
            array[j]=array[j-1]
            j--
        }
        array[j]=temp
    }
    return array
}
console.log(insertSort([3,5,1,4,2]))

//快速排序

function quick(arr=[]){
    if(arr.length<=1){
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
    let l = quick(left);
    let r = quick(right);
    return l.concat(provit).concat(r)
}
console.log(quick([3,5,1,4,2]))