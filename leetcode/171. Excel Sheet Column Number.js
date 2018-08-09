// Given a column title as appear in an Excel sheet, return its corresponding column number.
//
// For example:
//
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
// Example 1:
//
// Input: "A"
// Output: 1
// Example 2:
//
// Input: "AB"
// Output: 28
// Example 3:
//
// Input: "ZY"
// Output: 701

/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let dic = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  let i = 0;

  let result = 0;

  while (i < s.length) {
    result = result * 26 + (dic.indexOf(s[i]) + 1);
    i++;
  }
  return result;
};

var titleToNumber = function(s) {
    const str = "abcdefghijklmnopqrstuvwxyz";
    const map = {};
    str.toUpperCase().split("").forEach((value, index) => {
        map[value] = index + 1;
    });

    let result = 0;
    for (let i = 0; i < s.length; i++) {
        result = result * 26 + map[s[i]];
    }

    return result;
};

var titleToNumber = function(s) {
  let sum = 0;


  for (var i = 0; i < s.length; i++) {
    sum = sum * 26 + (s.charCodeAt(i) - "A".charCodeAt(0) + 1);
  }

  return sum;
}



console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))
