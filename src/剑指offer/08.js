
// 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

// 示例 1:

// 输入: 123
// 输出: 321
//  示例 2:

// 输入: -123
// 输出: -321
// 示例 3:

// 输入: 120
// 输出: 21
// 注意:

// 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。
//请根据这个假设，如果反转后整数溢出那么就返回 0。


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let result;
    let flag = Math.sign(x);
    result = Math.abs(x).toString().split('').reverse().join('');
    if(result > (Math.pow(2,31) - 1) || result < (-Math.pow(2,31))){
        return 0
    }
    if(flag > 0){
        return result
    }else {
        return -result
    }
};

console.log(reverse(1563847412))
console.log(reverse(4324))
console.log(reverse(-123))