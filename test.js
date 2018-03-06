var bubble = require('./bubble');
var select = require('./select');
var merge = require('./merge');
var bubble = require('./bubble');

// 测试
var list = new Array(1000);
for (let i = 0; i < list.length; i++) {
  list[i] = Math.floor(Math.random() * 1000);
}

// 使用同一个数据源测试
// 每次排序前COPY一份，防止被其他排序算法串改(如归并排序)
console.time('冒泡');
bubble([...list]);
console.timeEnd('冒泡');

console.time('选择');
bubble([...list]);
console.timeEnd('选择');

console.time('归并');
bubble([...list]);
console.timeEnd('归并');

console.time('快排');
bubble([...list]);
console.timeEnd('快排');
