function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minimumIndex]) {
        minimumIndex = j;
      }
    }

    if (minimumIndex !== i) {
      let lesser = array[minimumIndex];
      array[minimumIndex] = array[i];
      array[i] = lesser;
    }
  }
  return array;
}

module.exports = selectionSort;