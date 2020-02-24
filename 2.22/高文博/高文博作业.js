class Node {
  constructor(element) {
    this.element = element;
    this.next = undefined;
  }
}

class HadList {
  constructor() {
    this.head = null;
    this.count = 0;
    this.len = 1;
    this.str = ""
  }
  push(element) {
    let node = new Node(element)   //创建节点
    let current;   //定义指针
    if (this.head === null) {  //判断链表是否为空
      this.head = node
    } else {
      current = this.head
      while (current.next != null) {
        current = current.next    //指针移动   当指针.next再次指向null  停止循环  把指针.next = node
      }
      current.next = node
    }
    this.count++    //有几个节点 (node)
  }
  getElementAt(index) {
    let current = this.head;
    if (index >= 0 && index < this.count) {
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
    return undefined;
  }
  removeAt(index) {
    let current = this.head;
    if (index >= 0 && index < this.count) {
      if (index === 0) {   //删除的是第一个节点
        this.head = current.next;
      } else {
        let prious = this.getElementAt(index - 1)  //getElementAt来获取节点  
        prious.next = prious.next.next
      }
      this.count--
    }
    return undefined;
  }
  indexof(element) {
    let current = this.head;
    for (let i = 0; i < this.count && current != null; i++) {
      if (element === current.element) {
        return i
      }
      current = current.next    //如果不相等  指针移动  继续遍历
    }
    return -1;
  }
  remove(element) {
    let index = this.indexof(element)   //找到对应的下标  删除
    return this.removeAt(index)
  }
  insert(element, index) {
    let current = this.head
    if (index >= 0 && index < this.count) {
      let node = new Node(element);
      if (index === 0) {
        this.head = node;
        node.next = current
      } else {
        let prious = this.getElementAt(index - 1)  //getElementAt来获取节点 
        let current = prious.next   //保留一下当前节点
        prious.next = node;
        node.next = current
      }
      this.count++;
      return true;
    }
    return false
  }
  isEmpty() {
    let current = this.head;
    if (current.next === null) {
      return true + "链表为空"
    } else {
      return false
    }
  }
  size() {
    let current = this.head;
    while (current.next != null) {
      current = current.next
      this.len++
    }
    return this.len
  }
  toString() {
    let current = this.head
    if (current.next === null) {  //第一个节点就位空的话 证明此链表为空
      return ""
    } else {
      this.str = current.element + ","
      while (current.next != null) {
        this.str += current.next.element + ","
        current = current.next
      }
      return this.str
    }
  }

  // 求单链表的中间节点，如果链表的长度为偶数，返回中间两个节点的任意一个，若为奇数，则返回中间节点。
  mylen() {
    // let current = this.head;
    let len = this.size()
    if (len !== 0 && len % 2 == 0) {   //偶数
      let index = Math.ceil(len / 2 - 1)
      return this.getElementAt(index).element
    } else {                           //奇数
      let index = Math.floor(len / 2)  //向上取整 3/2 1.5向上取整是2   -1  得到下标
      return this.getElementAt(index).element
    }
  }

  // 输入: head = [4, 5, 1, 9], node = 5
  // 输出: [4, 1, 9]
  // 解释: 给定你链表中值为 5 的第二个节点，那么在调用了你的函数之后，该链表应变为 4 -> 1 -> 9.
  myRemove(arr, element) {
    let current = this.head
    for (let i = 0; i < arr.length; i++) {
      this.push(arr[i])
    }
    let index = this.indexof(element)
    this.removeAt(index)
    let brr = this.toString().split(",")
    brr.splice(brr.length - 1, 1)
    return brr
  }
}

let l = new HadList()
// l.push("a")
// l.push("b")
// l.push("c")
// l.push("d")
// l.push("f")
// console.log(l.getElementAt(2))
// console.log(l.removeAt(3))
// console.log(l.indexOf("b"))
// console.log(l.remove("a"))
// console.log(l.insert("f", 1))
// console.log(l.mylen())
console.log(l.myRemove([5, 6, 9, 4], 9))
// console.log(l)

