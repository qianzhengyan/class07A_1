
// 1、实现双向链表的removeAt方法和insert()方法
// 创建节点
class Node{
    constructor(elememt){
        this.element = elememt;
        this.prev = prev;
        this.next = next;
    }
}

class list{
    constructor(){
        this.head = null;
        this.tail = null;
        this.count = 0;
    }
    removeAt(index){
        if(index>=0&&index<this.count){
            let current = this.head;//创建指针
            if(index==0){//要删除第一个节点
                this.head = current.next;
                if(this.count==1){//当队列里面只有一个节点时
                    this.tail = null;
                }else{
                    this.head.prev = null;
                }
            }else if(index == this.count-1){//删除最后一个节点
                current = this.tail;//未删除前指针指向
                this.tail = current.prev;
                this.tail.next = null;
            }else{//删除中间节点
                let cur = this.getElementAt(index);//要删除的元素
                let prevdom = cur.prev;//要删除的上一个元素
                prevdom.next = cur.next;
                cur.next.prev = prevdom;
            }
            this.count--;
            return current;
        }
        return undefined;
    }
    insert(elememt,index){
        if(index>=0&&index<this.count){
            let node = new Node(elememt);//要添加的元素节点
            let current = this.head;
            if(index==0){
                if(this.head===null){//往空队列里面添加元素
                    this.head = node;
                    this.tail = node;
                }else{
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            }else if(index == this.count){//往队尾添加元素
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }else{//在队列中间添加元素
                let prevdom = this.getElementAt(index-1);
                current = prevdom.next;
                node.next = current;
                prevdom.next = node;
                current.prev = node;
                node.prev = prevdom;
            }
            this.count++;
            return true;
        }
        return false;
    }
}
// let l = new list();
// console.log(l.insert('a',0))

//十进制转二进制
function getNum(num){
    let arr = [];
    let str = '';
    while(num>=1){
        let s = Math.floor(num/2);//商
        let y = num%2;//余数
        arr.push(y)
        num = s;
    }
    for(let i=arr.length-1;i>=0;i--){
        str = str + arr[i];
    }
    return str;
}
console.log(getNum(42))