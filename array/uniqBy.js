const arr = [
    {
        a:1,
        b:1,
    },
    {
        a:1,
        b:1,
    },
    {
        a:1,
        b:1,
    },
    {
        a:1,
        b:1,
    }
]

const _ = require('lodash');

const data = _.uniqBy(arr,'a','b');
console.log(data)