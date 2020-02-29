// 创建Graph类

class Graph{
    constructor(isDirected=false){
        this.isDirected=isDirected;
        this.adjList=new Map();
        this.vertices=[]
    }
    //addVertex()方法 用来向图中添加一个新的定点

    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v,[])
        }
    }
  //addEdge()方法 用来创建图的边
  addEdge(v,w){
      if(!this.adjList.get(v)){
          this.addVertex(v)
      }
      if(!this.adjList.get(w)){
          this.addVertex(w)
      }
      this.adjList.get(v).push(w)
      if(!this.isDirected){
          this.adjList.get(w).push(v)
      }
  }
  //getVertices()方法 获取顶点列表
  getVertices(){
    return this.vertices;
}
//getAdjList()方法 获取临接表
getAdjList(){
    return this.adjList;
}

//实现tostring 的打印方法
toString(){
    for(let i=0;i<this.list.length;i++){
        console.log(this.list[i])
    }
}

}


//不使用递归的方法实现二分查找法
function binarySearch(arr,low,high,value){
    if(low<=high){
        const mid = Math.floor((low + high)/2);
        const element = arr[mid];
        if(element==value){
            return mid
        }else if(element>value){
            high = mid -1;
            return binarySearch(arr,low,high,value)
        }else{
            low = mid + 1;
            return binarySearch(arr,low,high,value)
        }
    }
    return -1
}
let list1 = [1,2,3,4,5,7,8,10]
let low = 0;
let high = list1.length - 1
binarySearch(arr,low,high,value)