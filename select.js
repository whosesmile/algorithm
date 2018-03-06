// 选择排序 不稳定
function sort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let k = i;
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        k = j;
      }
    }
    [list[i], list[k]] = [list[k], list[i]];
  }
}

module.exports = sort;
