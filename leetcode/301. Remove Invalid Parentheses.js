// Remove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.
//
// Note: The input string may contain letters other than the parentheses ( and ).
//
// Example 1:
//
// Input: "()())()"
// Output: ["()()()", "(())()"]
// Example 2:
//
// Input: "(a)())()"
// Output: ["(a)()()", "(a())()"]
// Example 3:
//
// Input: ")("
// Output: [""]
/**
 * @param {string} s
 * @return {string[]}
 */
const removeInvalidParentheses = function (s) {
  if (s === null) {
    return [];
  }

  const result = [];

  const queue = [];
  const visited = new Set();

  queue.push(s);
  visited.add(s);

  let found = false;

  while (queue.length !== 0) {
    let str = queue.shift();

    if (isValid(str)) {
      result.push(str);
      found = true;
    }

    if (found) {
      continue;
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== "(" && str[i] !== ")") {
        continue;
      }
      let substr = str.substring(0, i) + str.substring(i + 1);
      if (!visited.has(substr)) {
        queue.push(substr);
        visited.add(substr);
      }
    }
  }
  return result;
}
const isValid = (s) => {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      count++;
    }
    if (s[i] === ")") {
      count--;
    }
    if (count < 0) {
      return false;
    }
  }
  return count === 0;
}
