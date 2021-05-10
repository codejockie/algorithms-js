function swap(array, i, j) {
  [array[i], array[j]] = [array[j], array[i]];
}

function partition(array, low, high) {

  const pivot = array[high];
  let i = (low - 1);
  
  for (let j = low; j < high; j++) {
    if (array[j] <= pivot) {
      i++;
      swap(array, i, j);
    }

  }
  swap(array, i + 1, high);

  // return the position from where partition is done
  return (i + 1);
}

function quickSort(array, low, high) {
  if (low < high) {
    
    const pi = partition(array, low, high);
    
    quickSort(array, low, pi - 1);
    quickSort(array, pi + 1, high);
  }
}

module.exports = quickSort;