const _items = new WeakMap();
class Stack {
    constructor(){
        _items.set(this,[]);
    };
    push(value){
        let s = _items.get(this);
        s.push(value)
    };
    getItems(){
        let s = _items.get(this);
        return s
    };
    pop(){
        let s = _items.get(this);
        return s.pop()
    };
    isEmpty(){
        let s = _items.get(this);
        return s.length === 0
    }
}

function decimalToBinary(decNumber){
    let stack = new Stack();
    let number = decNumber;
    let rem;
    let binary = '';
    while(number > 0){
        rem = number % 2;
        stack.push(rem)
        number = Math.floor(number / 2);
    };
    while(!stack.isEmpty()){
        binary += stack.pop().toString();
    };
    return binary
}

console.log(decimalToBinary(32));
console.log(decimalToBinary(2));
console.log(decimalToBinary(4));





