function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const lesser = array[j + 1];
        array[j + 1] = array[j];
        array[j] = lesser;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;