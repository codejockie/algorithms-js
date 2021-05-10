function isSorted(array) {
  for (let i = 0; i < array.length; i++) {
    let current = array[i]
    let next = array[i + 1]
    if (next && current > next) {
      // exit as soon as we know the array isn't sorted
      return false
    }
  }
  return true
}