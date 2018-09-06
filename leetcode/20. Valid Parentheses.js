// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true


/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (char === "(") {
      stack.push(")");
    } else if (char === "[") {
      stack.push("]");
    } else if (char === "{") {
      stack.push("}");
    } else if (stack.length === 0 || stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}


var isValid = function(s) {
  const stack = [];

  for (var i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")") {
      if (stack.pop() !== "(") {
        return false;
      }
    } else if (char === "]") {
      if (stack.pop() !== "[") {
        return false;
      }
    } else if (char === "}") {
      if (stack.pop() !== "{") {
        return false;
      }
    } else {
      return false;
    }
  }
  return stack.length === 0;
};

const s1 = "()";
const s2 = "()[]{}";
const s3 = "(]";
const s4 = "([)]";
const s5 = "{[]}";

console.log(isValid(s1));
console.log(isValid(s2));
console.log(isValid(s3));
console.log(isValid(s4));
console.log(isValid(s5));
