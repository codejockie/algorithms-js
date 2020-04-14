function filter(array, fn) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (fn(current)) {
      result.push(current);
    }
  }
  return result;
}