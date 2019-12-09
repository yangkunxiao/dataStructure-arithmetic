/**
 * 栈：Last In First Out => LIFO 后进先出
 * 
*/
class stack {
    public items:Array<any>;
    constructor(){
        this.items = [];
    };
    //向栈顶推元素
    push(value){
        this.items.push(value);
    };
    //查看栈顶元素
    peek(){
        return this.items[this.items.length - 1];
    };
    //删除栈顶元素
    pop(){
        return this.items.pop()
    };
    //清空栈
    clear(){
        this.items = [];
    }
    //查看栈是否为空
    isEmpty(){
        return this.items.length === 0
    };
    //查看栈的长度
    size(){
        return this.items.length;
    }
}

var arr = new stack();
arr.push(1);
arr.push(3);
arr.push(2);
// arr.shift()


console.log(arr.peek());
// console.log(arr.isEmpty());
