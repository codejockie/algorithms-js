function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const centre = Math.floor(arr.length / 2);
  const left = arr.slice(0, centre);
  const right = arr.slice(centre);

  return merge(mergeSort(left), mergeSort(right));
}

module.exports = mergeSort;