// Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.
//
// Example 1:
//
// Input: num = "123", target = 6
// Output: ["1+2+3", "1*2*3"]
// Example 2:
//
// Input: num = "232", target = 8
// Output: ["2*3+2", "2+3*2"]
// Example 3:
//
// Input: num = "105", target = 5
// Output: ["1*0+5","10-5"]
// Example 4:
//
// Input: num = "00", target = 0
// Output: ["0+0", "0-0", "0*0"]
// Example 5:
//
// Input: num = "3456237490", target = 9191
// Output: []
/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function(num, target) {
  if (num === null || num.length === 0) {
    return [];
  }

  const result = [];
  helper(num, target, "", 0, 0, 0, result);
  return result;
};

const helper = function(num, target, path, lastFactor, sum, startIndex, result) {
  if (startIndex === num.length && sum === target) {
    result.push(path);
    return;
  }
  for (let i = startIndex; i < num.length; i++) {
    if (i > startIndex && num[startIndex] === '0') {
      return;
    }
    let currStr = num.substring(startIndex, i + 1);
    let currNum = Number(currStr);

    if (startIndex === 0) {
      helper(num, target, currStr, currNum, currNum, i + 1, result)
    } else {
      helper(num, target, path + '*' + currStr, lastFactor * currNum, sum - lastFactor + lastFactor * currNum, i + 1, result);
      helper(num, target, path + '+' + currStr, currNum, sum + currNum, i + 1, result);
      helper(num, target, path + '-' + currStr, -currNum, sum - currNum, i + 1, result);
    }
  }
}
