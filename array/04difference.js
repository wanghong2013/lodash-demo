/**
 * _.difference(array, [values])
 * 创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
 * （即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）
 * 该方法使用 SameValueZero做相等比较。结果值的顺序是由第一个数组中的顺序确定。

注意: 不像 _.pullAll，这个方法会返回一个新数组。

array (Array): 要检查的数组。
[values] (...Array): 排除的值。


 */

 const _  = require("lodash")
const arr1 = [3, 2, 1];
const arr =  _.difference(arr1, [4, 2]);
console.log(arr1,'arr1')
console.log(arr,'arr');