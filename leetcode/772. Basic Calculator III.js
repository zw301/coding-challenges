// Implement a basic calculator to evaluate a simple expression string.
//
// The expression string may contain open ( and closing parentheses ), the plus + or minus sign -, non-negative integers and empty spaces .
//
// The expression string contains only non-negative integers, +, -, *, / operators , open ( and closing parentheses ) and empty spaces . The integer division should truncate toward zero.
//
// You may assume that the given expression is always valid. All intermediate results will be in the range of [-2147483648, 2147483647].
//
// Some examples:
//
// "1 + 1" = 2
// " 6-4 / 2 " = 4
// "2*(5+5*2)/3+(6/2+8)" = 21
// "(2+6* 3+5- (3*14/7+2)*5)+3"=-12
//
//
// Note: Do not use the eval built-in library function.
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(s) {
  if (s === null || s.length === 0) {
    return 0;
  }

  let sign = '+';
  let num = 0;

  const stack = [];
  const len = s.length;

  for (let i = 0; i < len; i++) {
    let c = s[i];
    if (c >= '0' && c <= '9') {
      num = num * 10 + Number(c);
    } else if( c === '(') {
      let count = 1;
      let j = i + 1;
      while (j < len) {
        if (s[j] === '(') {
          count++;
        }
        if (s[j] === ')') {
          count--;
        }
        if (count === 0) {
          break;
        }
        j++;
      }

      num = calculate(s.substring(i + 1, j));
      i = j;
    }

    if (c === '+' || c === '-' || c === '*' || c === '/' || i === len - 1) {
      if (sign === '+') {
        stack.push(num);
      }
      if (sign === '-') {
        stack.push(-num);
      }
      if (sign === '*') {
        stack.push(stack.pop() * num);
      }
      if (sign === '/') {
        stack.push(Math.trunc(stack.pop() / num));
      }
      num = 0;
      sign = c;
    }
  }


  return stack.reduce((acc, el) => acc = acc + el, 0);
};
