//@ts-check
/**
 * 双端队列：可以同时在队列头部插入和在尾部移除
*/

class Dequeue {
    constructor() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    };
    addFront(element) {
        if (this.isEmpty()) {
            this.addBack(element);
        } else if (this.lowestCount > 0) {
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for (let i = this.count; i > 0; i--) {
                this.items[i + 1] = this.items[i];
            }
            this.count++;
            this.lowestCount = 0;
            this.items[0] = element;
        }
    };
    addBack(element) {
        this.items[this.count] = element;
        this.count++;
    };
    removeFront() {
        if (this.isEmpty()) {
            return undefined
        } else {
            const res = this.items[this.lowestCount];
            delete this.items[this.lowestCount];
            this.lowestCount++;
            return res
        }
    };
    removeBack() {
        if (this.isEmpty()) {
            return undefined
        } else {
            const res = this.items[this.count - 1];
            delete this.items[this.count - 1];
            this.count--;
            return res;
        }
    };
    peekFront() {
        return this.items[this.lowestCount]
    };
    peekBack() {
        return this.items[this.count - 1]
    };
    isEmpty() {
        return (this.count - this.lowestCount) === 0
    };
    size() {
        if (this.isEmpty()) {
            return 0
        } else {
            return this.count - this.lowestCount
        }
    };
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0
    };
    toString() {
        if (this.isEmpty()) {
            return '';
        } else {
            let res = this.items[this.lowestCount];
            for (let i = this.lowestCount + 1; i < this.count; i++) {
                res = `${res},${this.items[i]}`
            }
            console.log(res, 'res');
            return res;
        }
    }
};

// var deq = new Dequeue();
// deq.addBack(1);
// deq.addBack(2);
// deq.addBack(3);
// deq.addBack(4);
// deq.removeBack();
// console.log(deq.peekBack());
// console.log(deq.peekFront());

// deq.removeFront();
// deq.removeFront();
// deq.addFront(1);
// console.log(deq);


//回文
var str = '      '
// if(str.split('').reverse().join('') === str){
//     console.log('回文');
// }

function palindromeChecker(str) {
    //如果输入的字符串不满足基本条件 返回false
    if (str === undefined || str === null || str.length === 0) {
        return false
    };
    str = str.toLocaleLowerCase().split(' ').join('');
    let deq = new Dequeue();
    for (let i = 0, len = str.length; i < len; i++) {
        deq.addBack(str.charAt(i))
    };
    let firstChar, lastChar;//首位 末位
    let isEqual = true;//默认相等 
    while (deq.size() > 1 && isEqual) {//保证双端队列里最低有两个元素
        firstChar = deq.removeFront();//从前面取一个
        lastChar = deq.removeBack();//从后面取一个
        if (firstChar !== lastChar) {
            isEqual = false
        }
    }
    return isEqual
};
console.log(palindromeChecker(str));
