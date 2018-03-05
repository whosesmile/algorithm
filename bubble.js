function sort(list) {
  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      if (list[i] > list[j]) {
        [list[i], list[j]] = [list[j], list[i]];
      }
    }
  }
}

module.exports = sort;
