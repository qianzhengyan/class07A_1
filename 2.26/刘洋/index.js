
// 1、创建 Graph 类 2、addVertex()⽅法：⽤来向图中添加⼀个新的顶点

class Grap{
    constructor(isDirect=false){
        this.vertices=[] //顶点列表
        this.adjList=new Map() //邻接表
        this.isDirect=isDirect  //是否是有向的
        
    }
    
    addVertex(x){
        if(!this.vertices.includes(x)){ //判断顶点表里是否存在该点 如果存在就不再添加 否则添加
            this.vertices.push(x) // 在顶点表里添加x
            this.adjList.set(x,[]) //再邻接表里添加一项 
        }
    }
    // 3、addEdge()⽅法：⽤来创建图的边
    addedge(x,y){ //在邻接表里添加
        if(!this.adjList.get(x)){ //如果在邻接表里有没有这一项
            this.addVertex(x)
        }
        if(!this.adjList.get(y)){
            this.addVertex(y)
        }
        this.adjList.get(x).push(y) //获取key为x的value  是个数组 将y添加入数组
        if(!this.isDirect){ //判断是否是有向的 
            this.adjList.get(y).push(x)
        }
    }
    // 4、getVertices()⽅法：获取顶点列表
    getVertices(){
        return this.vertices //顶点列表
    }
    // 5、getAdjList()⽅法：获取临接表
    getAdjList(){
        return this.adjList //邻接表
    }
    // 6、实现toString的打印⽅法()
    toString(){
        return this.vertices.toString()
    }

}
let a=new Grap()

a.addedge("a","b")
a.addedge("b","c")
console.log(a.toString())
// 7、不使⽤递归的⽅式实现⼆分查找法

function twoSearch(arr,val){
    let max=arr.length-1
    let min=0
    
    while(min!=max){
        var mid=Math.floor((max+min)/2)
        // console.log(max,min,mid)
        if(arr[mid]>val){
            max=mid-1
            // console.log(max)
        }else if(arr[mid]<val){
            min=mid+1
            // console.log(min)
        }else{
            return mid
        }
    }
    if(arr[min]==val){
        return min
    }else{
        return -1
    }
}
let  arr=[1,2,3,4,5,7,8,10]

console.log(twoSearch(arr,9))

