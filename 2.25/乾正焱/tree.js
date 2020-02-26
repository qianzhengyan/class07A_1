// 树 重点知识掌握 递归 指针 和引用
class Node{
    constructor(element){
        this.element = element;
        this.left = null;
        this.right = null;
    }
}
class Tree{
    constructor(){
        this.root = null;
    }
    // insert(key):向树中插⼊⼀个新的键。
    insert(element){
        let node = new Node(element);//先创建元素节点
        if(this.root==null){//空树
            this.root = node;
        }else{
            this.insertNode(this.root,node);
        }
    }
    insertNode(node,newNode){
        if(newNode.element<node.element){//左子树
            if(node.left==null){
                node.left = newNode;
            }else{
                this.insertNode(node.left,newNode)
            }
        }else{//右子树
            if(node.right==null){
                node.right = newNode;
            }else{
                this.insertNode(node.right,newNode)
            }
        }
    }
    // search(key):在树中查找⼀个键。如果节点存在，则返回 true;如果不存在，则返回
    search(element){//若存在，返回true，反之，false
        this.searchNode(this.root,element)
    }
    searchNode(node,element){
        if(node===null){
            return false;
        }
        if(node.element>element){//去左子树
            this.searchNode(node.left,element)
        }else if(node.element<element){//去右子树
            this.searchNode(node.right,element)
        }else{
            return true;
        }
    }
    // inOrderTraverse():通过中序遍历⽅式遍历所有节点。左=>根=>右
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
    // preOrderTraverse():通过先序遍历⽅式遍历所有节点。根=》左=》右
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
    // postOrderTraverse():通过后序遍历⽅式遍历所有节点。左=》右=》根
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
    min(){//返回树中最⼩的值/键。
        let node = this.root;
        while(node!=null&&node.left){
            node = node.left;
        }
        return node;
    }
    max(){//返回树中最⼤的值/键。
        let node = this.root;
        while(node!=null&&node.right){
            node = node.right;
        }
        return node;
    }
    remove(element){//从树中移除某个键。
        let current = this.root;
        if(current==null){
            return '空树'
        }
        if(this.search(element)){//存在
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
let t = new Tree();
t.insert(6);
t.insert(2);
t.insert(9);
// t.search(2)
// t.remove(2)
// t.preOrderTraverse()//6-2-9
// t.inOrderTraverse()//2-6-9
// t.postOrderTraverse()//2-9-6
// console.log(t.min())//2
// console.log(t.max())//9
console.log(t)