function oddFactorial(n) {
  let product = 1;
  if (n < 0) {
    return  null;
  }

  if (n % 2 === 0) {
    n -= 1;
  }

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      product *= i;
    }
  }

  return product;
}

// do not touch this export
module.exports = oddFactorial;
