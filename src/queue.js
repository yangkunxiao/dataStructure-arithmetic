//@ts-check
/**
 * queue：队列 First In First Out : 队列先进先出 
*/
class Queue {
    constructor() {
        this.items = {};//队列
        this.count = 0;//队列的键、 跟踪尾部、计算插入数量
        this.lowestCount = 0;// 跟踪头部、计算删除数量
    };
    enqueue(elements) {
        this.items[this.count] = elements;
        this.count++;
    };
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        } else {
            const result = this.items[this.lowestCount];
            delete this.items[this.lowestCount];
            this.lowestCount++;
            return result;
        }
    };
    isEmpty() {
        return (this.count - this.lowestCount) === 0
    };
    peek() {
        if (this.isEmpty()) {
            return undefined
        } else {
            console.log(this.items[this.lowestCount]);

            return this.items[this.lowestCount]
        }
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

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.dequeue();
// queue.dequeue();
// queue.peek();
// queue.toString()
// console.log(queue);

function hotPotato(elementsList, num) {
    const queue = new Queue(); // {1}
    const elimitatedList = [];
    for (let i = 0; i < elementsList.length; i++) {
        queue.enqueue(elementsList[i]); // {2}
    }
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()); // {3}
        }
        elimitatedList.push(queue.dequeue()); // {4}
    }
    return {
        eliminated: elimitatedList,
        winner: queue.dequeue() // {5}
    };
}

var eleList= ['kx','yk','yx','hd'];

console.log(hotPotato(eleList,3));

