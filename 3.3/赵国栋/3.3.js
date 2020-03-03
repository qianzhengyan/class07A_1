Function.prototype.call = function (context) {
    if (!context) {
        context = typeof window === 'undefined' ? global : window;
    }
    context.fn = this;//改变this指向
    let rest = [...arguments].slice(1);
    let result = context.fn(...rest);//调用隐式绑定
    delete context.fn;
    return result;
}
let obj = {
    name: 'zhaoguodong'
}
function bar(name, age) {
    console.log(this.name);
    console.log(name, age);
}

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
bar.apply(obj, ['赵国栋', 21])