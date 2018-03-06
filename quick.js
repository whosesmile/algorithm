// 快速排序 不稳定
function sort(list = [], s = 0, e = list.length - 1) {
  if (s >= e) {
    return;
  }

  const p = list[s];
  let [i, j] = [s, e];

  while (i < j) {
    while (list[j] >= p && i < j) {
      --j;
    }
    while (list[i] <= p && i < j) {
      ++i;
    }

    [list[i], list[j]] = [list[j], list[i]];
  }

  [list[i], list[s]] = [list[s], list[i]];

  sort(list, s, i - 1);
  sort(list, i + 1, e);
}

module.exports = sort;

// 测试
if (module === require.main) {
  var list = new Array(20).fill(0).map(n => Math.floor(Math.random() * 100));
  sort(list);
  console.log(list);
}
