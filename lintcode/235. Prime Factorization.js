// 235. Prime Factorization
// Prime factorize a given integer.
//
// Example
// Given 10, return [2, 5].
//
// Given 660, return [2, 2, 3, 5, 11].
const primeFactorization = function (num) {
  if (num < 2) {
    return [];
  }

  const result = [];
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      result.push(i);
      num = num / i;
    }
  }
  if (num !== 1) {
    result.push(num);
  }

  return result;
}
