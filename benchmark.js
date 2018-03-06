var bubble = require('./bubble');
var select = require('./select');
var insert = require('./insert');
var merge = require('./merge');
var bubble = require('./bubble');

// 测试
var list = new Array(10000).fill(0).map(n => Math.floor(Math.random() * 10000));

// 使用同一个数据源测试
// 每次排序前COPY一份，防止被其他排序算法串改(如归并排序)
console.time('冒泡');
bubble([...list]);
console.timeEnd('冒泡');

console.time('选择');
bubble([...list]);
console.timeEnd('选择');

console.time('插入');
insert([...list]);
console.timeEnd('插入');

console.time('归并');
bubble([...list]);
console.timeEnd('归并');

console.time('快排');
bubble([...list]);
console.timeEnd('快排');
