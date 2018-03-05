var quick = require('./quick');
var merge = require('./merge');
var bubble = require('./bubble');

// 测试
var list = new Array(1000);
for (let i = 0; i < list.length; i++) {
  list[i] = Math.floor(Math.random() * 1000);
}

// 注意：冒泡和快排是修改原数组 而归并是生成新数组
console.time('冒泡');
bubble(list);
console.timeEnd('冒泡');

console.time('归并');
merge(list);
console.timeEnd('归并');

console.time('快排');
quick(list);
console.timeEnd('快排');
