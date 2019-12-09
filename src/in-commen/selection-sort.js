//选择排序
var arr = [1, 4, 5, 2, 3, 9, 0, 7, 6];
var temp;
/**
 * 选择排序每次比较的是数组中特定索引的值与全数组中每个值的大小比较，
 * 每次都选出一个最小(最大)值，如果当前索引的值大于之后索引的值，则两者进行交换
 * 时间复杂度：O(n^2);
 * 空间复杂度：O(1)
 * 
*/
for (let i = 0,len = arr.length; i <len; i++) {
    for (let j = i + 1; j < len - i; j++) {
        if(arr[i] > arr[j]){
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } 
    }
    console.log(arr);
    
}
console.log(arr);




