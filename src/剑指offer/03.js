/**
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
 * 请找出数组中任意一个重复的数字。
 */

/**
* @param {number[]} nums
* @return {number}
*/
var findRepeatNumber = function (nums) {
    let map = new Map();
    for (const item of nums) {
        if (map.has(item)) {
            // let val = map.get(item);
            return item;
            // map.set(item, ++val);
        } else {
            map.set(item, 0)
        }
    }
    // for (const [key, value] of map) {
    //     if (value > 0) {
    //         return key
    //     }
    // }
};

var arr = [2, 3, 1, 0, 2, 5, 3];

console.log(findRepeatNumber(arr));