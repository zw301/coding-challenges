// Convert a non-negative integer to its english words representation. Given input is guaranteed to be less than 231 - 1.
//
// Example 1:
//
// Input: 123
// Output: "One Hundred Twenty Three"
// Example 2:
//
// Input: 12345
// Output: "Twelve Thousand Three Hundred Forty Five"
// Example 3:
//
// Input: 1234567
// Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
// Example 4:
//
// Input: 1234567891
// Output: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) {
    return "Zero";
  }
  return helper(num);
};

const helper = function(num) {
  const belowTwenty = ["", "One", "Two", "Three", "Four",
                      "Five", "Six", "Seven", "Eight", "Nine", "Ten",
                      "Eleven", "Twelve", "Thirteen", "Fourteen",
                      "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty",
                        "Sixty", "Seventy", "Eighty", "Ninety"];
  let result;
  if (num < 20) {
    result = belowTwenty[num];
  }
  else if (num < 100) {
    let n = Math.floor(num / 10);
    result = belowHundred[n] + " " + helper(num % 10);
  }
  else if (num < 1000) {
    let n = Math.floor(num / 100);
    result = helper(n) + " Hundred " + helper(num % 100);
  }
  else if (num < 10 ** 6) {
    let n = Math.floor(num / 10 ** 3);
    result = helper(n) + " Thousand " + helper(num % 10 ** 3 );
  }
  else if (num < 10 ** 9) {
    let n = Math.floor(num / 10 ** 6);
    result = helper(n) + " Million " + helper(num % 10 ** 6);
  }
  else if (num < 10 ** 12) {
    let n = Math.floor(num / 10 ** 9);
    result = helper(n) + " Billion " + helper(num % 10 ** 9);
  }
  return result.trim();
}

console.log(numberToWords(20));
console.log(numberToWords(12345));
console.log(numberToWords(1234567));
