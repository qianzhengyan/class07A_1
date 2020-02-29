// insert(key):向树中插⼊⼀个新的键。

class Node{
    constructor(element){
        this.element=element;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(){
        this.root=null;
    }
    insert(element){
        let newNode=new Node(element);
        if(this.root===null){
            this.root=newNode
        }else{
            this.insertNode(this.root,newNode)
        }
    }
    insertNode(node,newNode){
        if(newNode.element<node.element){
            if(node.left===null){
                node.left=newNode
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right===null){
                node.right=newNode
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    // search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回false。

    search(element){
        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node==null){
            return false
        }
        if(node.element>element){
            return this.searchNode(node.left,element)
        }else if(node.element<element){
            return this.searchNode(node.right,element)
        }else{
            return true
        }
    }

    //inOrderTraverse():通过中序遍历⽅式遍历所有节点。

    inOrderTraverse(){
        this.midOrderTraverseNode(this.root);
    }
    midOrderTraverseNode(node){
        if(node!=null){
            this.midOrderTraverseNode(node.left);
            console.log(node.element);
            this.midOrderTraverseNode(node.right);
        }
    }

    //preOrderTraverse():通过先序遍历⽅式遍历所有节点。
    preOrderTraverse(){
        this.preOrderTraverseNode(this.root);
    }
    preOrderTraverseNode(node){
        if(node!=null){
            console.log(node.element);
            this.preOrderTraverseNode(node.left);
            this.preOrderTraverseNode(node.right);
        }
    }

    //postOrderTraverse():通过后序遍历⽅式遍历所有节点。
    postOrderTraverse(){
        this.postOrderTraverseNode(this.root);
    }
    postOrderTraverseNode(node){
        if(node!=null){
            this.postOrderTraverseNode(node.left);
            this.postOrderTraverseNode(node.right);
            console.log(node.element);
        }
    }

    //min():返回树中最⼩的值键。
    min(){
        let current = this.root;
        while(current!=null&& current.left){
            current = current.left
        }
        return current
    }

    //max():返回树中最⼤的值/键
    max(){
        let current = this.root;
        while(current!=null&& current.right){
            current = current.right
        }
        return current
    }
    //remove(key):从树中移除某个键。
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
             if(node.left == null && node.right==null){
                 node = null;
                 return node
             }
             if(node.left==null){
                 node = node.right
                 return node
             }else if(node.right==null){
                 node = node.left
                 return node
             }
             const minNode = this.minNode(node.right);
             node.element = minNode.element;
             node.right = this.removeNode(node.right,minNode.element)
             return node
         }
     }
}