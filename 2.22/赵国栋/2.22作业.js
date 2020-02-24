
class Node{
    constructor(element){
        this.element = element;
        this.next = undefined;
    }   
}
class LinkedList{
    constructor(){
        this.head = null;
        this.count = 0
    }
    push(element){
        let current=this.head
        let node = new Node(element)
        
        if(this.head===null){
            this.head = node
        }else{
            while(current.next != null){
                current = current.next
            }
            current.next = node
        }
        this.count++
    }
    getElementAt(index){
        let current = this.head;
        if(index<0||index>this.count){
            return undefined
        }else{
            for(let i=0;i<index;i++){
                current = current.next
            }
            return current
        }
    }
    removeAt(index){
        let current = this.head;
        if(index>=0&&index<this.count){
            if(index===0){
                this.head = current.next
            }else{
                let previous = this.getElementAt(index-1)
                current = previous.next;
                previous.next = current.next
            }
            this.count--;
            return current.element
        }
        return undefined
    }
  
    indexOf(element){
        let current = this.head;
        if(this.count==0){
          return -1
        }else{
            for(let i=0;i<this.count;i++){
                if(element==current.element){
                    return i
                }
                current=current.next
            }
        }
    }
    remove(element){
        let index = this.indexOf(element);
        return this.removeAt(index)
    }
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
    isEmpty(){
        if(this.count>0){
            return false
        }else{
            return true
        }
    }
    size(){
        return this.count
    }
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

    tocenter(){
        if(this.count%2==0){
            let m=Math.ceil((this.count-1)/2)
            let n=Math.floor((this.count-1)/2)
            return this.getElementAt(Math.floor(Math.random()*(m-n+1))+n)
        }else{
            return this.getElementAt((this.count-1)/2)
        }
    }

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


let z = new LinkedList()
z.push("a")
z.push("b")
z.push("c")
z.push("d")
console.log(z.tocenter())
console.log(z.delAt("b"))
console.log(z.toString())