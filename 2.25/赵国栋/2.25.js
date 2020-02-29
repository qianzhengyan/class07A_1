// 树 重点知识掌握 递归 指针 和引用
class Node{
    constructor(element){
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class index{
    constructor(){
        this.root = null;
    }

    insert(element){
        let node = new Node(element);
        if(this.root==null){
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(node,newNode){
        if(newNode.element<node.element){
            if(node.left==null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{
            if(node.right==null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }

    search(element){
        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node===null){
            return '空树'
        }
        if(node.element>element){
            this.searchNode(node.left,element)
        }else if(node.element<element){
            this.searchNode(node.right,element)
        }else{
            return true;
        }
    }
  
    inOrderTraverse(){
        this.inOrderTraverseNode(this.root);
    }
    inOrderTraverseNode(node){
        if(node!=null){
            this.inOrderTraverseNode(node.left);
            console.log(node.element);
            this.inOrderTraverseNode(node.right)
        }
    }

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
    min(){
        let node = this.root;
        while(node!=null&&node.left){
            node = node.left;
        }
        return node;
    }
    max(){
        let node = this.root;
        while(node!=null&&node.right){
            node = node.right;
        }
        return node;
    }
    remove(element){
        let current = this.root;
        if(current==null){
            return '空树'
        }
        if(this.search(element)){
            current = element;
            let prev = this.search(element.left);
            if(element.left==null){
                prev.left = null;
            }else if(element.right==null){
                prev.right = null
            }else{
                return '不会'
            }
        }else{
            return '该树中没有你要删除的键'
        }
    }
}
let z = new index();
z.insert(1);
z.insert(2);
z.insert(3);
z.remove(4)

console.log(z)