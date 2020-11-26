const _  = require('lodash');

/**
 * _.drop(array, [n=1])
 * 从 开始开始删除 删除数组，返回一个新的数组 
 * 
 * array (Array): 要查询的数组。
[n=1] (number): 要去除的元素个数。
 */


 /** 返回值 
  * 
  * 返回array剩余切片。
  * 
  */

 const arr = [1,2,3,[2,3,4]];

 console.log(_.drop(arr));
 console.log(_.drop(arr,4));