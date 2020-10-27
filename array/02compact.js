/**
 * _.compact(array)
创建一个新数组，包含原数组中所有的非假值元素。例如false, null, 0, "", undefined, 和 NaN 都是被认为是“假值”。
 * 
 */
const _ = require("lodash");

const arr = ["a", "", null, false, undefined, NaN, 0];

const newArr = _.compact(arr); // [ 'a' ]
console.log('%c 🍿 newArr: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', newArr); // 🍿 newArr:  [ 'a' ]

