// enqueue(element(s)):向队列尾部添加⼀个(或多个)新的项。

// dequeue():移除队列的第⼀项(即排在队列最前⾯的项)并返回被移除的元素。

// peek():返回队列中第⼀个元素——最先被添加，也将是最先被移除的元素。

// isEmpty():如果队列中不包含任何元素，返回 true，否则返回 false。

// size():返回队列包含的元素个数，与数组的 length 属性类似。

class duilie{
    constructor(){
        this.items = {};
        this.count = 0;
        this.current = 0;
    }
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty(){
        return this.count - this.current === 0;
    }
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        let result = this.items[this.current];
        delete this.items[this.current];
        this.current++;
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.current];
    }
    size(){
        return this.count;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let obj = `${this.items[0]}`;
        for(let i=1;i<this.count;i++){
            obj = `${obj},${this.items[i]}`
        }
        return obj;
    }
}