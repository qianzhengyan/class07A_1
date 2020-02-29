// 2、栈

// push(element(s)):添加⼀个(或⼏个)新元素到栈顶。

// pop():移除栈顶的元素，同时返回被移除的元素。

// peek():返回栈顶的元素，不对栈做任何修改(该⽅法不会移除栈顶的元素，仅仅返回它)。

// isEmpty():如果栈⾥没有任何元素就返回 true，否则返回 false。

// clear():移除栈⾥的所有元素。

// size():返回栈⾥的元素个数。该⽅法和数组的 length 属性很类似。

class zhan{
    constructor(){
        this.items = {};
        this.count = 0;
    }
    push(element){
        this.items[this.count] = element;
        this.count++;
    }
    isEmpty(){
        return this.count === 0;
    }
    pop(){
        if(this.isEmpty()){//空栈
            return undefined;
        }
        let result = this.items[this.count--];//删除的元素
        delete this.items[this.count--]
        return result;
    }
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count-1]
    }
    clear(){//初始化，删除所有
        this.items = {};
        this.count = 0;
    }
    size(){
        if(this.isEmpty()){
            return 0;
        }
        return this.count;
    }
    toString(){
        if(this.isEmpty()){
            return ''
        }
        let first = this.items[0];
        for(let i=1;i<this.count;i++){
            first = `${first},${this.item[i]}`
        }
        return first;
    }
}
// let z = new zhan();
// console.log(z.push({x:1}))