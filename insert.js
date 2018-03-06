function sort(list) {
  for (let i = 1; i < list.length; i++) {
    let j = i
    let t = list[i];
    for (; j >= 0 && list[j - 1] > t; j--) {
      list[j] = list[j - 1];
    }
    list[j] = t;
  }
}

module.exports = sort;

// 测试
if (module === require.main) {
  var list = new Array(20).fill(0).map(n => Math.floor(Math.random() * 100));
  sort(list);
  console.log(list);
}
