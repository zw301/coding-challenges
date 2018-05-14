// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  const res = [];

  while (x > 0) {
    res.push(x % 10);
    x = Math.floor(x / 10);
  }

  let i = 0;
  let j = res.length - 1;
  while (i <= j) {
    if (res[i] !== res[j]) return false;
    i++;
    j--;
  }
  return true;
};

console.log(isPalindrome(10))
console.log(isPalindrome(-121))
console.log(isPalindrome(121))
console.log(isPalindrome(343))
console.log(isPalindrome(5665))
