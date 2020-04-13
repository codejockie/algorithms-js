function count2sinRangeAtDigit(number, d) {
  let count = 0;
  let powerOf10 = Math.pow(10, d);
  let nextPowerOf10 = powerOf10 * 10;
  let right = number % powerOf10;

  let roundDown = number - number % nextPowerOf10;
  let roundup = roundDown + nextPowerOf10;

  let digit = (number / powerOf10) % 10;

  // if the digit in spot digit is  
  if (digit < 2) {
    return roundDown / 10;
  }

  if (digit == 2) {
    return roundDown / 10 + right + 1;
  }
  return roundup / 10;
}

/**
 * The first occurrence of d cannot be before number d. So we start to iterate from d and do following check again and
 * again. We jump the number by 10 most of the time (in step 2) except for the cases mentioned in steps 2.a and 2.b.
 * Step 1: Check whether the last digit of the number is equal to the d, if it is then increment the count.
 * Step 2:
 * a) If the number is completely divisible by 10 then increment both the count and number (For example if we reach
 * the number 30 which is completely divisible by 10 and d=3, then we have to count all numbers from 31-39 that’s why
 * we increment count by 1 and number by 1)
 * b) else if the first digit of the number is one less than d then it means that we have come to the row where we
 * have to increment the number by 10 and subtract the d from it. For example if we reach 23 for d=3 then we increment
 * the number by 23+10-3 = 30)
 * c) else increment the number by 10 only. (For example: d=3, itr=3, then increment by 10 i.e.13, 23)
 * Step 3:- Return the count.
 */
function getOccurence(n, d) {
  // Initialize result 
  let result = 0;

  // Count appearances in numbers 
  // starting from d. 
  let itr = d;
  while (itr <= n) {

    // When the last digit is 
    // equal to d 
    if (itr % 10 == d)
      result++;

    // When the first digit is 
    // equal to d then 
    if (itr != 0 && itr / 10 == d) {

      // increment result as  
      // well as number 
      result++;
      itr++;
    }

    // In case of reverse of number 
    // such as 12 and 21 
    else if (itr / 10 == d - 1)
      itr = itr + (10 - d);
    else
      itr = itr + 10;
  }

  return result;
}

function numberOf2sinRange(number) {
  let convert = number.toString();
  let len = convert.length;

  // Traverse every digit and  
  // count for every digit  
  let count = 0;
  for (let digit = 0; digit < len; digit++) {
    count += count2sinRangeAtDigit(number, digit);
  }

  return count;
}

function frequencyDigits(n, d) {
  return getOccurence(n, d);
}

module.exports = { frequencyDigits };