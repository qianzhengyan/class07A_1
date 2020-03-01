// 1、实现双向链表的removeAt方法和insert()方法
class Node{
    constructor(el){
        this.next=null
        this.prev=null
        this.element=el
    }
}

class twoList{
    constructor(){
        this.head=null
        this.tail=null
        this.count=0
    }
    removeAt(index){
        let current=this.head
        if(index>=0&&index<this.count){
            if(index==0){
                if(this.count==1){
                    this.head=null
                    this.taill=null
                }else{
                    this.head=current.next
                    current.next.prev=null
                }
            }else if(index=this.count-1){
                current=this.tail
                current.prev.next=null
                this.tail=current.prev
            }else{
                current=this.getele(index)
                current.prev.next=current.next
                current.next.prev=current.prev
            }
            this.count--
            return current
        }
    }
  
    insert(index,el){
        let node=new Node(el)
        let current=this.head
       if(index>=0&&index<this.count){
           if(index==0){
               if(this.count==1){
                   this.head=node
                   this.tail=node
               }else{
                this.head=node
                node.next=current
                current.prev=node
               }
           }else if(index==this.count-1){
               current=this.tail
               current.next=node
               this.tail=node
               node.prev=current
           }else{
               current=this.getel(index)
               node.prev=current.prev
               current.prev.next=node
               node.next=current
               current.prev=node
           }
           this.count++
           return 1
       }
    }
    getel(index){
        let current=this.head
        if(index>=0&&index<this.count){
            for(let i=0;i<index;i++){
                current=current.next
            }
            return current
        }
        return undefined
    }
}


// 2、栈



class Zhan{
    constructor(){
        this.count=0
        this.items={}
    }
// push(element(s)):添加⼀个(或⼏个)新元素到栈顶。
    push(element){
        this.items[this.count]=element
        this.count++
    }
// pop():移除栈顶的元素，同时返回被移除的元素。
    pop(){
        if(this.isEmpty()){
            return useDebugValue(value)
        }
        let val=this.items[this.count-1]
        delete this.items[this.count-1]
        this.count--
        return val
    }
// peek():返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。
    peek(){
        if(this.isEmpty()){
            return useDebugValue(value)
        }
        return this.items[this.count-1]
    }
// isEmpty():如果栈⾥没有任何元素就返回 true，否则返回 false。
    isEmpty(){
        if(this.count==0){
            return true
        }else{
            return false
        }
    }
// clear():移除栈⾥的所有元素。
    clear(){
        this.items={}
        this.count=0
    }
// size():返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。
    size(){
        return this.count
    }


// 4、使用栈实现进制转化的功能

// 比如：十进制 3 ------ 二进制 11;十进制 5 ----- 二进制 101

    zhuan(num){
        let n= num
        let sum=0
        while(n/2!=0){
            sum=n%2
            this.push(sum)
            n=Math.floor(n/2)
        }
        
    }
}
let z=new Zhan()
z.zhuan(5)
console.log(z)
// 3、队列
class Dui{
    constructor(){
        this.items={}
        this.count=0;
        this.staCount=0
    }
// enqueue(element(s)):向队列尾部添加⼀个(或多个)新的项。
    enqueue(el){
        this.items[this.count]=el
        this.count++
    }
// dequeue():移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。
    dequeue(){
        if(this.isEmpty){
            return undefined
        }
        let val=this.items[this.staCount]
        delete this.items[this.staCount]
        this.staCount++
        return val
    }
// peek():返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。
    peek(){
        if(this.isEmpty){
            return undefined
        }
        return this.items[this.staCount]
    }
// isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。
    isEmpty(){
        return this.count-this.staCount==0
    }
// size():返回队列包含的元素个数，与数组的 length 属性类似。
    size(){
        return this.count-this.staCount
    }
}

