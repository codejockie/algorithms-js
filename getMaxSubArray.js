/**
 * Maximal sub array
 * The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
 * The task is: find the contiguous subarray of arr with the maximal sum of items.
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem
 */

//  Slow O(n2).
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

// Fast O(n).
function maxSubarray(numbers) {
  // Find the largest sum of any contiguous subarray.
  let bestSum = 0 // or `Number.NEGATIVE_INFINITY` to disallow empty subarrays
  let currentSum = 0
  for (const x of numbers) {
    currentSum = Math.max(0, currentSum + x) // or Math.max(x, currentSum + x)  to disallow empty subarrays
    bestSum = Math.max(bestSum, currentSum)
  }
  return bestSum
}

// Algorithm modified to keep track of the starting and ending indices of the maximum subarray
function maxSubArray(numbers) {
  // Find a contiguous subarray with the largest sum.
  bestSum = 0  // or: `Number.NEGATIVE_INFINITY` to disallow empty subarrays
  bestStart = bestEnd = 0  // or: null
  currentSum = 0
  for (const [currentEnd, x] of numbers.entries()) {
    if (currentSum <= 0) {
      // Start a new sequence at the current element
      currentStart = currentEnd
      currentSum = x
    }
    else {
      // Extend the existing sequence with the current element
      currentSum += x
    }

    if (currentSum > bestSum) {
      bestSum = currentSum
      bestStart = currentStart
      bestEnd = currentEnd + 1  // the +1 is to make 'bestEnd' exclusive
    }
  }

  return [bestSum, bestStart, bestEnd]
}