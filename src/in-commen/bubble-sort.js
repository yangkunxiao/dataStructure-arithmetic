/**
 * 冒泡排序:每次从数组0位开始查找，如果当前值比较大，则交换位置。
 * 这样外一次循环下来，最大的值就会排入到最后的位置。 
 * 第二次外循环就可以将第二大的数字找出，拍到倒数第二位
 * 依次类推，所以内层循环只需循环 (len-i) 次即可
 * 
*/
var arr = [1, 4, 5, 2, 3, 9, 0, 7, 6];

for (let i = 0, len = arr.length; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp
        }
        console.log(arr);
    }
}



console.log(arr);
