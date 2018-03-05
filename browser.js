function bubble(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
  }
}

function quick(list = [], s = 0, e = list.length - 1) {
  if (s >= e) {
    return;
  }

  const b = list[s];
  let [i, j] = [s, e];

  while (i < j) {
    while (list[j] >= b && i < j) {
      --j;
    }
    while (list[i] <= b && i < j) {
      ++i;
    }

    if (i < j) {
      [list[i], list[j]] = [list[j], list[i]];
    }
  }

  [list[i], list[s]] = [list[s], list[i]];

  quick(list, s, i - 1);
  quick(list, i + 1, e);
}

function merge(list = []) {
  if (list.length <= 1) {
    return list;
  }

  const n = Math.floor(list.length / 2);
  const l = merge(list.slice(0, n));
  const r = merge(list.slice(n));
  return _merge(l, r);
}

function _merge(l, r) {
  const list = [];
  while (l.length && r.length) {
    list.push(l[0] < r[0] ? l.shift() : r.shift());
  }
  return [...list, ...l, ...r];
}

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
