/**
 * _.chunk(array, [size=1])
    将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
 */

const _ = require("lodash");

const arr = ["a", "b", "c", "d,", "e"];

const newArr = _.chunk(arr, 2);

console.log(newArr); //[ [ 'a', 'b' ], [ 'c', 'd,' ], [ 'e' ] ] 每2个分为一个数组
