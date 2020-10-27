/**
 * _.concat(array, [values])
创建一个新数组，将array与任何数组 或 值连接在一起。
 */

const _ = require("lodash");

const arr1 = [1];

const cArr = _.concat(arr1, 1, 2, 3, 4); // [ 1, 1, 2, 3, 4 ]
console.log(
  "%c 🍈 cArr: ",
  "font-size:20px;background-color: #6EC1C2;color:#fff;",
  cArr
);

const arr2 = [3, 4, 5, [2]];

const cArr2 = _.concat(arr1,arr2); //[ 1, 3, 4, 5, [ 2 ] ]
console.log('%c 🍼️ cArr2: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', cArr2);
