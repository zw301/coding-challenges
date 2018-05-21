// Implement a basic calculator to evaluate a simple expression string.
//
// The expression string contains only non-negative integers, +, -, *, / operators and empty spaces .
// The integer division should truncate toward zero.
//
// Example 1:
//
// Input: "3+2*2"
// Output: 7
// Example 2:
//
// Input: " 3/2 "
// Output: 1
// Example 3:
//
// Input: " 3+5 / 2 "
// Output: 5
// Note:
//
// You may assume that the given expression is always valid.
// Do not use the eval built-in library function.
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }

  let sign = "+";
  let num = 0;
  const len = s.length;

  const stack = [];

  for (let i = 0; i < len; i++) {
    const c = s[i];

    if (c >= "0" && c <= "9") {
      num = num * 10 + parseInt(c);
    }

    if (c === "+" || c === "-" || c === "*" || c === "/" || i === len - 1) {
      if (sign === "+") {
        stack.push(num);
      }
      if (sign === "-") {
        stack.push(-num);
      }
      if (sign === "*") {
        stack.push(stack.pop() * num);
      }
      if (sign === "/") {
        let val = stack.pop();
        if (val >= 0) {
          stack.push(Math.floor(val / num))
        } else {
          stack.push(Math.ceil(val / num))
        }
      }
      console.log(stack);
      sign = c;
      num = 0;
    }
  }

  console.log(stack);
  let res = 0;
  for (let i = 0; i < stack.length; i++) {
    res += stack[i];
  }
  return res;
};


// console.log(calculate("3+2*2"));
// console.log(calculate(" 3/2 "));
// console.log(calculate(" 3+5 / 2 "));
console.log(calculate("14-3 / 2"));
