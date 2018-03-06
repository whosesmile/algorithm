// 选择排序 不稳定
function sort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < list[k]) {
        k = j;
      }
    }
    [list[i], list[k]] = [list[k], list[i]];
  }
}

module.exports = sort;

// 测试
if (module === require.main) {
  var list = new Array(20).fill(0).map(n => Math.floor(Math.random() * 100));
  sort(list);
  console.log(list);
}
