/**
 * Gets all prime numbers up to the max argument.
 * @param {number} maxNumber
 * @return {number[]}
 */
function primes(maxNumber) {
  // Using sieve of Eratosthenes
  const primes = []
  const isPrime = new Array(maxNumber + 1).fill(true)
  isPrime[0] = false
  isPrime[1] = false


  for (let number = 2; number <= maxNumber; number += 1) {
    if (isPrime[number] === true) {
      primes.push(number)

      let nextNumber = number * number

      while (nextNumber <= maxNumber) {
        isPrime[nextNumber] = false
        nextNumber += number
      }
    }
  }

  return primes
}
