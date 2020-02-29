class Graph{
    constructor(isDirect=false){
        this.vertices=[]
        this.adjList=new Map()
        this.isDirect=isDirect
    }

    addVertex(z){
        if(!this.vertices.includes(z)){
            this.vertices.push(z)
            this.adjList.set(z,[])
        }
    }

    addEdge(a,b){
        if(!this.adjList.get(a)){
            this.addVertex(a)
        }
        if(!this.adjList.get(b)){
            this.addVertex(b)
        }
        this.adjList.get(a).push(b)
        if(!this.isDirect){
            this.adjList.get(b).push(x)
        }
    }

    getVertices(){
        return this.vertices
    }

    getAdjList(){
        return this.adjList
    }

    toString(){
        return this.vertices.toString()
    }
}

let z = [1,2,3,4,5,7,8,10]
let low = 0;
let high = z.length - 1
function Search(arr,low,high,value){
    if(low<=high){
        const mid=Math.floor((low+high)/2)
        const el=arr[mid]
        if(el==value){
            return mid
        }else if(el>value){
            high=mid-1
            return Search(arr,low,high,value)
        }else{
            low=mid+1
            return Search(arr,low,high,value)
        }
    }
    return -1
}


Search(arr,low,high,value)