// 单例模式
class Person{
    constructor(name){
        this.name;
        if(!Person.demo){
            Person.demo = this;
        }
        return Person.demo;
    }
    get(){
        return this;
    }
    set(name,grade,count){
        this.name = name;
        this.grade = grade;
        this.count = count;
    }
}
let a = new Person();
a.set('lucky','1707A',32)
console.log(a.get(),'a')
let b = new Person();
b.set('Lucky','1707a',86)
console.log(b.get(),'b')
console.log(a===b)