/**
 * 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */

/**
* @param {number[][]} matrix
* @param {number} target
* @return {boolean}
*/
var findNumberIn2DArray = function (matrix, target) {
    if (matrix.length === 0) return false;
    // for (let i = 0; i < matrix.length; i++) {
    //     let lineArr = matrix[i];
    //     for (let j = 0; j < lineArr.length; j++) {
    //         if (target === lineArr[j]) {
    //             return true
    //         }
    //     }
    // }
    let x = 0, y = matrix.length - 1;
    while (x < matrix[0].length && y >= 0) {
        if(target > matrix[y][x]){
            x++;
        }else if(target < matrix[y][x]){
            y--;
        }else{
            return true;
        }
    };
    return false
};

var matrix = [
    [1,1]
    // [1, 4, 7, 11, 15],
    // [2, 5, 8, 12, 19],
    // [3, 6, 9, 16, 22],
    // [10, 13, 14, 17, 24],
    // [18, 21, 23, 26, 30]
];
var target = 15;

console.log(findNumberIn2DArray(matrix, target))