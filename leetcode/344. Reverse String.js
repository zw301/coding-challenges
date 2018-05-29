// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let i = 0;
  let j = s.length - 1;

  let result = s.split("");

  while (i < j) {
    let tmp = result[i];
    result[i] = result[j];
    result[j] = tmp;
    i++;
    j--;
  }
  return result.join("");
};

const s = "hello";
console.log(reverseString(s));
