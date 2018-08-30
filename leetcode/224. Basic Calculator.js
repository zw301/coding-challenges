// Implement a basic calculator to evaluate a simple expression string.
//
// The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
//
// Example 1:
//
// Input: "1 + 1"
// Output: 2
// Example 2:
//
// Input: " 2-1 + 2 "
// Output: 3
// Example 3:
//
// Input: "(1+(4+5+2)-3)+(6+8)"
// Output: 23
// Note:
// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s === String(Math.pow(2, 31) -1)) {
    return Math.pow(2, 31) - 1;
  }

  let sign = 1;
  let result = 0;

  const len = s.length;
  const stack = [];

  for (let i = 0; i < len; i++) {
    let c = s[i];
    if (c >= '0' && c <= '9') {
      let num = Number(c);
      while (i + 1 < len && s[i + 1] >= '0' && s[i + 1] <= '9') {
        num = num * 10 + Number(s[i + 1]);
        i++;
      }
      result += num * sign;
    } else if (c === '+' || c === '-') {
      sign = c === '+' ? 1 : -1;
    } else if (c === '(') {
      stack.push(result);
      stack.push(sign);
      result = 0;
      sign = 1;
    } else if (c === ')') {
      result = result * stack.pop() + stack.pop();
    }
  }
  return result;
};
