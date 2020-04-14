function map(array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    result.push(fn(current, i));
  }
  return result;
}