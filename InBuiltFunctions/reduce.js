function reduce(array, fn, value) {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    value = fn(value, current, i, array);
  }
  return value;
}