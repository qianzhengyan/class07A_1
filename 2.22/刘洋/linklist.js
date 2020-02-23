

class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.count=0
    }
    // - push(element):向链表尾部添加⼀个新元素。
    push(el){
        let current=this.head
        let node=new Node(el)

        if(this.head==null){
            this.head=node
        }else{
            while (current.next!=null){
                current=current.next
            }
            current.next=node
        }
        this.count++
    }
    // - getElementAt(index):返回链表中特定位置的元素。如果链表中不存在这样的元素，则返回undefined。
    getElementAt(index){
        let current=this.head

        if(index<0||index>this.count){
            return undefined
        }else{
            for(let i=0;i<index;i++){
                current=current.next
            }
            return current
        }
    }
    //removeAt(position):从链表的特定位置移除⼀个元素。
    removeAt(index){
        // console.log(index,this.count,"ssssssssssss")
        let current=this.head
        if(index<0||index>this.count){
            return undefined
        }else{
            if(index==0){
                this.head=current.next
            }else{
              let left= this.getElementAt(index-1)
              current = left.next;
              left.next=current.next
            }
            this.count--
            return current.element
        }
    }
    //- indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
    indexOf(el){
        let current=this.head
        if(this.count==0){
            return -1
        }else{
            for(let i=0;i<this.count;i++){
                if(el==current.element){
                    return i
                }
                current=current.next
            }
        }
        
    }
    //- remove(element):从链表中移除⼀个元素。
    remove(el){
        let index=this.indexOf(el)
        return this.removeAt(index)
    }
    //- insert(element, position):向链表的特定位置插⼊⼀个新元素。
    insert(element,position){
        let current=this.head
        let node=new Node(element)
        if(position<this.count&&position>=0){
            if(position==0){
                this.head=node
                node.next=current
            }else{
                for(let i=0;i<position-1;i++){
                    current=current.next
                }
                let now=current.next
                current.next=node
                node.next=now
            }
            this.count++
            return this.count
        }
        return undefined
    }
    //- isEmpty():如果链表中不包含任何元素，返回 true，如果链表⻓度⼤于 0 则返回 false。
    isEmpty(){
        if(this.count>0){
            return false
        }else{
            return true
        }
    }
    //- size():返回链表包含的元素个数，与数组的 length 属性类似。
    size(){
        return this.count
    }
    //- toString():返回表示整个链表的字符串。
    toString(){
        let str=this.head.element
        let current=this.head.next
        // console.log(current)
        if(this.count==0){
            return ''
        }
        for(let i=0;i<this.count&&current!=null;i++){
            // console.log(current.element)
            str=`${str},${current.element}`
            current=current.next
        }
        return str
    }
    //1、求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点。

    tocenter(){
        if(this.count%2==0){
            let m=Math.ceil((this.count-1)/2)
            let n=Math.floor((this.count-1)/2)
            return this.getElementAt(Math.floor(Math.random()*(m-n+1))+n)
        }else{
            return this.getElementAt((this.count-1)/2)
        }
    }
    //2、请编写一个函数，使其可以删除某个链表中给定的（非末尾）节点，你将只被给定要求被删除的节点。
    delAt(el){
        let index=this.indexOf(el)
        console.log(index)
        if(index==this.count-1){
            return "末尾"
        }else{
            this.remove(el)
        }
    }
}




let a = new LinkedList()

a.push("a")
a.push("b")
a.push("c")
a.push("d")
console.log(a.tocenter())
console.log(a.delAt("b"))
console.log(a.toString())