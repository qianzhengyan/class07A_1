class Graph{
    constructor(isDirected=false){
        this.isDirected = isDirected
        this.adjList = new Map();
        this.vertices = [];
    }
    addEdge(v,w){
        if(!this.adjList.get(v)){
            this.addVertex(v)
        }
        if(!this.adjList.get(w)){
            this.addVertex(w)
        }
        this.adjList.get(v).push(w);
        if(!this.isDirected){
            this.addList.get(w).push(v)
        }
    }
    addVertex(v){
        if(!this.vertices.includes(v)){
            this.vertices.push(v);
            this.adjList.set(v,[])
        }
    }
    getVertices(){
        return this.vertices;
    }
    getAdjList(){
        return this.adjList;
    }
}
let arr=[1,3,4,5,6,7,8,9]
let min=0
let max=arr.length-1
function fun(arr,min,max,value){
    while(min<=max){
        let ind=parseInt((min+max)/2)
        if(value>arr[ind]){
            low=min+1
        }else if(value>arr[ind]){
            max=ind-1
        }else{
            return ind
        }
    }
    return -1
}
console.log(fun(arr,min,max,4))