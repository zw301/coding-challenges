// Count the number of prime numbers less than a non-negative number, n.
//
// Example:
//
// Input: 10
// Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
/**
 * @param {number} n
 * @return {number}
 */

// Time Complexity - O(nloglogn)， Space Complexity - O(n)
var countPrimes = function(n) {
  const notPrime = new Array(n).fill(false);
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (notPrime[i]) {
      continue;
    }
    count++;

    if (i > Math.sqrt(n)) {
      continue;
    }
    for (var j = 2; i * j < n; j++) {
      notPrime[i * j] = true;
    }
  }
  return count;
};

console.log(countPrimes(100));
