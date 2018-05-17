// Given a string, determine if it is a palindrome,
// considering only alphanumeric characters and ignoring cases.
//
// Note: For the purpose of this problem, we define empty string as valid palindrome.
//
// Example 1:
//
// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:
//
// Input: "race a car"
// Output: false


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  i = 0;
  j = s.length - 1;

  while (i < j) {
    if (!isValid(s[i])) {
      i++;
      continue;
    }
    if (!isValid(s[j])) {
      j--;
      continue;
    }
    if (!isEqual(s[i], s[j])) {
      return false;
    }
    i++;
    j--;
  }
  return true;
};

function isValid(char) {
  return (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9");
}

function isEqual(a, b) {
  if(a >= "0" && a <= "9") {
    return a == b;
  }
  return a.toLowerCase() === b.toLowerCase();
};
// function isEqual(a, b) {
//   if(a >= "0" && a <= "9") {
//     return a == b;
//   }
//   return (a === b)
//     || (a.charCodeAt() === b.charCodeAt() - "A".charCodeAt() + "a".charCodeAt())
//     || (b.charCodeAt() === a.charCodeAt() - "A".charCodeAt() + "a".charCodeAt());
// }


const s1 = "A man, a plan, a canal: Panama";
const s2 = "race a car";

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));
