function findDuplicates(arr) {
  const hash = {};
  return arr.reduce((acc, curr, index) => {
    if (hash[curr] && !acc.includes(curr)) {
      acc.push(curr);
    }
    hash[curr] = curr;
    return acc;
  }, []);
}