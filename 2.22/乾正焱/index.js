class Node{
    constructor(element){
        this.element = element;
        this.next = null;
    }
}
class LinkList{
    constructor(){
        this.head = null;
        this.count = 0;
    }
    push(element){//向链表结尾推入元素
        let node = new Node(element);//元素节点
        let current;
        if(this.head===null){//空链表
            this.head = node;
        }else{
            current = this.head;
            while(current.next != null){
                current = current.next
            }
            current.next = node;
        }
        this.count++;
    }
    getElementAt(index){//根据下标获取指定的元素节点
        if(index>=0&&index<this.count){
            let current = this.head;
            for(let i=0;i<index;i++){
                current = current.next;
            }
            return current;
        }
        return undefined;
    }
    removeAt(index){//根据下标删除指定的元素节点
        if(index>=0&&index<this.count){
            let current = this.head;
            if(index==0){
                this.head = current.next;
            }else{
                let prevElement = this.getElementAt(index-1);//获取要删除的前一个元素节点
                current = prevElement.next;
                prevElement.next = current.next;
                // console.log(prevElement.next,'00')
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }
    insert(element,index){
        if(index>=0&&index<this.count){
            let node = new Node(element);
            if(index==0){
                let current = this.head;
                node.next = current;
                this.head = node;
            }else{
                let prevElement = this.getElementAt(index-1);
                let current = prevElement.next;
                node.next = current;
                prevElement.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }
    indexOf(element){//返回元素节点在链表中的索引，没有返回-1
        let current = this.head;
        for(let i=0;i<this.count;i++){
            if(element === current.element ){
                return i;
            }
            current = current.next;
        }
        return -1;
    }
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
    }
    toString(){
        if(this.head==null){
            return '空'
        }
        let objString = `${this.head.element}`;
        let current = this.head.next;
        for(let i=0;i<this.count&&current !=null ;i++){
            objString = `${objString},${current.element}`;
            current = current .next;
        }
        return objString;
    }
    isEmpty(){
        let arr = this.toString().split(',');//把字符串转化成数组
        if(arr.length==0){
            return true;
        }else{
            return false;
        }
    }
    size(){
        let arr = this.toString().split(',');
        return arr.length;
    }
    delete(element){
        let index = this.indexOf(element);
        let arr = this.toString().split(',');
        if(arr.length-1==index){
            return "末尾节点不可删！"
        }
        this.removeAt(index);
        return this.toString().split(',');
    }
}
const l = new LinkList();
l.push('a')
l.push('b')
l.push('c')
// l.push('d')
// console.log(l.size())
// console.log(l.isEmpty())
// console.log(l.getElementAt(1))
// console.log(l.indexOf('b'))
// console.log(l.toString())
// console.log(l.insert("d",1))
// console.log(l.removeAt(2))
// console.log(l.remove('c'))
console.log(l.delete('c'))//练习题2答案
// console.log(l)

// 练习题1
let arr = [1,2,3,4,5,6,7,2];
function MidElement(arr){
    let mid = arr.length / 2;
    let min = mid-1;
    let num = mid.toString().indexOf(".");
    if(num ==-1){//偶数
        let sjnum = Math.floor(Math.random()*(mid-min+1)+min);
        return arr[sjnum]
    }else{//奇数
        let index = Math.floor(mid);
        return arr[index]
    }
}
console.log(MidElement(arr))


// 练习题2
// 答案见108-131行


