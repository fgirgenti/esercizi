function memoize(fn) {
  let cache = {};
  return function (n) {
      if (n in cache) {
        console.log(`Fetching from cache for ${n}`)
        return cache[n];
      }
  console.log(`Calculating result for ${n}`)    
  return cache[n] = fn(n);
  }
}

function factorial(x) {
  if (x === 0) {
    return 1;
  }

  return x * factorial(x - 1);
}

const fact = memoize(factorial);
console.log(fact(10));
console.log(fact(6));
console.log(fact(5));
