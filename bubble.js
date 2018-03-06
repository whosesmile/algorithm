// 冒泡排序 稳定
function sort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    for (let j = 0; j < list.length - 1 - i; j++) {
      if (list[j] > list[j + 1]) {
        [list[j], list[j + 1]] = [list[j + 1], list[j]];
      }
    }
  }
}

module.exports = sort;

// 测试
if (module === require.main) {
  var list = new Array(20).fill(0).map(n => Math.floor(Math.random() * 100));
  sort(list);
  console.log(list);
}
