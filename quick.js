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

    if (i < j) {
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  [list[i], list[s]] = [list[s], list[i]];

  sort(list, s, i - 1);
  sort(list, i + 1, e);
}

module.exports = sort;
