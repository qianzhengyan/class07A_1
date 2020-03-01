

class Node{
    constructor(element){
        this.left=null
        this.right=null
        this.element=element
    }
}

class Tree{
    constructor(){
        this.root=null
    }
// insert(key):向树中插⼊⼀个新的键。
    insert(key){
        let node=new Node(key)
        if(this.root==null){
            this.root=node
        }else{
           this.add(this.root,node)
        }
    }
    add(node,newN){
        if(node.element>newN.element){
            if(node.left==null){
                node.left=newN
            }else{
                this.add(node.left,newN)
            }
        }else{
            if(node.right==null){
                node.right=newN
            }else{
                this.add(node.right,newN)
            }
        }
    }
// search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回false。
    search(key){
        this.ishave(this.root,key)
    }
    ishave(node,key){
        if(node==null){
            return false
        }else{
            if(node.element>key){
                return this.ishave(node.left,newN)
            }else if(node.element<key){
                return this.ishave(node.right,newN)
            }else{
                return true
            }
        }
    }
    // inOrderTraverse():通过中序遍历⽅式遍历所有节点。
    inOrderTraverse(){
        this.midd(this.root)
    }
    midd(node){
        if(node!=null){
            this.midd(node.left)
            console.log(node.element)
            this.midd(node.right)
        }
    }
    // preOrderTraverse():通过先序遍历⽅式遍历所有节点。
    preOrderTraverse(){
        this.pre(this.root)
    }
    pre(node){
        if(node!=null){
            console.log(node.element)
            this.midd(node.left)
            this.midd(node.right)
        }
    }
    // postOrderTraverse():通过后序遍历⽅式遍历所有节点。
    postOrderTraverse(){
        this.postO(this.root)
    }
    postO(node){
        if(node!=null){
           
            this.midd(node.left)
            this.midd(node.right)
            console.log(node.element)
        }
    }
    // min():返回树中最⼩的值/键。
    min(){
        if(this.root==null){
            return undefined
        }
        return this.tomin(this.root)
    }
    tomin(node){
        if(node.left==null){
            return node
        }
        this.tomin(node.left)
    }
    // max():返回树中最⼤的值/键。
    max(){
        let current = this.root;
        while(current!=null&&current.right!=null){
            current=current.right
        }
        return current
    }
// remove(key):从树中移除某个键。
remove(key){
    num = this.removeNode(this.root,key)
    return num
 }
 removeNode(node,key){
     if(node==null){
         return null
     }
     if(node.element>key){
 
     }else if(node.element<ke){
         node.right = this.removeNode(node.right,key)
     }else{
         if(node.left == null && node.right==null){//一
             node = null
             return node
         }
        
         if(node.left==null){
             node = node.right
             return node
         }else if(node.right==null){
             node = node.left
             return node
         }
         
         const minNode = this.minNode(node.right)
         node.element = minNode.element
         node.right = this.removeNode(node.right,minNode.element)
         return node
     }
 }

}
let t= new Tree()
t.insert(1)
t.insert(2)
t.insert(3)
console.log(t.min())