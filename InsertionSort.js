function insertionSort(array) {
  for (j = 2; j < array.length; j++) {
    const key = array[j];
    let i = j - 1;

    while (i > 0 && i > key) {
      array[i + 1] = array[i];
      i = i - 1;
    }
    array[i + 1] = key;
  }
  return array;
}

module.exports = insertionSort;