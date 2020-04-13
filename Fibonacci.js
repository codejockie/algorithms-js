// Too slow, takes forever to run fib of 1881
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

/* 
function memoize(func) {
  var memo = {};
  var slice = Array.prototype.slice;

  return function() {
    var args = slice.call(arguments);

    if (args in memo)
      return memo[args];
    else
      return (memo[args] = func.apply(this, args));

  }
}
 */

function fib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const memoizedFib = memoize(fib);

// This is faster than the memoized version
function fibo(n) {
  if (n < 2) {
    return n;
  }

  let minus2 = 0;
  let minus1 = 1;
  let fib = minus1 + minus2;
  
  // for (let i = 3; i <= n; i++) {
  //   minus2 = minus1;
  //   minus1 = fib;
  //   fib = minus1 + minus2;
  // }

  let i = 3;
  while (i <= n) {
    minus2 = minus1;
    minus1 = fib;
    fib = minus1 + minus2;
    i++;
  }

  return fib;
}

// fibo(1881);