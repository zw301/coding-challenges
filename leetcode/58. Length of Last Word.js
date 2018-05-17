// Given a string s consists of upper/lower-case alphabets and empty space characters ' ',
// return the length of last word in the string.
//
// If the last word does not exist, return 0.
//
// Note: A word is defined as a character sequence consists of non-space characters only.
//
// Example:
//
// Input: "Hello World"
// Output: 5

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count = 0;
  let i = s.length - 1;

  while (i >= 0 && s[i] === " ") {
    i--;
  }

  while (i >= 0 && s[i] !== " ") {
    count++;
    i--;
  }

  return count;
};

// const s = "Hello World";
const s = "Hello World ";
const s2 = " ";
const s3 = "Hello World";
const s4 = " Hello World";

console.log(lengthOfLastWord(s));
console.log(lengthOfLastWord(s2));
console.log(lengthOfLastWord(s3));
console.log(lengthOfLastWord(s4));
