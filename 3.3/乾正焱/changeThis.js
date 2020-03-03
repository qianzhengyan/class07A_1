// call apply bind的区别
// 1.call apply是立即执行的，bind什么时候调用什么时候执行
// 2.apply第二个参数是数组而call不是
// apply(this,...args);
// call(this,arg1,arg2)

Function.prototype.call = function (context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;//改变this指向
    let rest = [...arguments].slice(1);//除this之外的值 '乾正焱',21
    let result = context.fn(...rest);//调用隐式绑定
    delete context.fn;
    return result;
}
let obj = {
    name: 'lucky'
}
function bar(name, age) {
    console.log(this.name);
    console.log(name, age);
}
// bar.call(obj,'乾正焱',21)

Function.prototype.apply = function (obj, arr) {
    var result;
    obj.fn = this;
    if (arr) {
        var newArr = [];
        for (var i = 0; i < arr.length; i++) {
            newArr.push('arr[' + i + ']');
        }
        newArr = newArr.join(',');
        result = eval('obj.fn(' + newArr + ')')
    } else {
        result = obj.fn();
    }
    delete obj.fn;
    return result;

}
// }
bar.apply(obj, ['乾正焱', 21])