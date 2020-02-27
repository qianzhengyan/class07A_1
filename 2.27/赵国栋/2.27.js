let arr=[1,5,8,11,6,2,33,15]

function mp(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}

function xz(arr){
    for(let i=0;i<arr.length;i++){
        let indexmin=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[indexmin]>arr[j]){
                indexmin=j
            }
        }
        if(indexmin!=i){
            [arr[i],arr[indexmin]]=[arr[indexmin],arr[i]]
        }
    }
    return arr
}

function cr(arr){
    for(let i=0;i<arr.length;i++){
        let j=i
        let temp=arr[i]
        while(j>0&&arr[j-1]>temp){
            arr[j]=arr[j-1]
            j--
        }
        arr[j]=temp
    }
    return arr
}

function ks(arr){
    if(arr.length<=1){
        return arr
    }
    let index=arr[0]
    let left=[]
    let right=[]
    for(let i=1;i<arr.length;i++){
        if(index>=arr[i]){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    let a=Quick(left)
    let b=Quick(right)
    return a.concat(index).concat(b)
}