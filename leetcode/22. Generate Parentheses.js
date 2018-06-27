// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {

  const result = [];
  helper(n, "", 0, 0, result);
  return result;
};

const helper = function(n, str, left, right, result) {
  if (str.length === 2 * n) {
    result.push(str);
    return;
  }

  if (left < n) {
    helper(n, str + "(", left + 1, right, result);
  }

  if (right < left) {
    helper(n, str + ")", left, right + 1, result);
  }
}

console.log(generateParenthesis(3));
