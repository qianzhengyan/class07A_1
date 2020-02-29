// 1、创建 Graph 类 2、addVertex()⽅法：⽤来向图中添加⼀个新的顶点
// 3、addEdge()⽅法：⽤来创建图的边
// 4、getVertices()⽅法：获取顶点列表
// 5、getAdjList()⽅法：获取临接表
// 6、实现toString的打印⽅法()
// 7、不使⽤递归的⽅式实现⼆分查找法

class Graph{
    constructor(isDirection=false){
        this.isDirection = isDirection;
        this.adjList = new Map();//存储键值对
        this.list = [];//定义顶点的列表
    }
    addVertices(v){//获取顶点列表
        if(!this.list.includes(v)){//判断顶点列表中是否存在这个顶点
            this.list.push(v);//把v顶点存进顶点列表中
            this.adjList.set(v,[]);//存入键值对
        }
    }
    addEdge(v,w){//用来创建图的边
        if(!this.adjList.get(v)){
            this.addVertices(v);
        }
        if(!this.adjList.get(w)){
            this.addVertices(w)
        }
        this.adjList.get(v).push(w);
        if(!this.isDirection){
            this.adjList.get(w).push(v)
        }
    }
    getAdjList(){
        return this.adjList;//返回临接表
    }
    getList(){
        return this.list;//返回顶点列表
    }
    toString(){
        for(let i=0;i<this.list.length;i++){
            console.log(this.list[i])
        }
    }
}
let p = new Graph();
p.addVertices("a")
p.addVertices("b")
p.addEdge('a','b')
let l = p.getAdjList()
let d = p.getList()
p.toString()
// console.log(d)


// 使用递归 二分查找法
function Two(arr,low,height,value){
    if(low<=height){
        let mid = Math.floor((low+height)/2);//求中间值下标
        let element = arr[mid];//中间元素
        if(element==value){
            return mid;
        }else if(element>value){
            height = mid-1;
            return Two(arr,low,height,value)
        }else{
            low = mid+1;
            return Two(arr,low,height,value);
        }
    }
    return -1;
}
// let arr = [1,2,3,4,5,6];
// let low = 0;
// let height = arr.length-1;
// console.log(Two(arr,low,height,5))//2


// 不使用递归  二分查找法
function Check(arr,low,height,value){
    if(low<=height){
        let mid = Math.floor((low+height)/2);
        let element = arr[mid];
        if(element==value){
            return mid;
        }else if(element>value){
            height = mid-1;
            let mid1 ="";
            while(low<=height){
                mid1 = Math.floor((low+height)/2);
                height = mid1-1;
                if(arr[mid1]==value){
                    return mid1;
                }else if(arr[mid2]>value){
                    height = mid2-1;
                }else{
                    low = mid2+1;
                }
            }
            return mid1;
        }else{
            low = mid +1;
            let mid2 = "";
            while(low<=height){
                mid2 = Math.floor((low+height)/2);
                if(arr[mid2]==value){
                    return mid2;
                }else if(arr[mid2]>value){
                    height = mid2-1;
                }else{
                    low = mid2+1;
                }
            }
            return mid2;
        }
    }
    return -1;
}
let arr = [1,2,3,4,5,6];
let low = 0;
let height = arr.length-1;
console.log(Check(arr,low,height,6))