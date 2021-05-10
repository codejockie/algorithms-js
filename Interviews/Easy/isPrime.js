function isPrime(n) {
  if (n < 2) {
    return false
  }
  for (let i = 2; i < Math.ceil(Math.sqrt(n)) + 1; i++) {
    if (n % i === 0 && i !== n) {
      return false
    }
  }
  return true
}