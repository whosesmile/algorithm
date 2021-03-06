// 归并排序
function sort(list = []) {
  if (list.length <= 1) {
    return list;
  }

  const n = Math.floor(list.length / 2);
  const l = sort(list.slice(0, n));
  const r = sort(list.slice(n));
  return merge(l, r);
}

function merge(l, r) {
  const list = [];
  while (l.length && r.length) {
    list.push(l[0] < r[0] ? l.shift() : r.shift());
  }
  return list.concat(l).concat(r);
}

module.exports = sort;

// 测试
if (module === require.main) {
  var list = new Array(20).fill(0).map(n => Math.floor(Math.random() * 100));
  list = sort(list);
  console.log(list);
}
