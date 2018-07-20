// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.
//
//
//
// Example:
//
// Input: "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
//
// Although the above answer is in lexicographical order, your answer could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(str) {
    const map = {
    "0": [],
    "1": [],
    "2": ["a", "b", "c"],
    "3": ["d", "e", "f"],
    "4": ["g", "h", "i"],
    "5": ["j", "k", "l"],
    "6": ["m", "n", "o"],
    "7": ["p", "q", "r", "s"],
    "8": ["t", "u", "v"],
    "9": ["w", "x", "y", "z"]
  }

  if(str.length === 0) {
      return [];
  }
  if (str.length === 1) {
    return map[str];
  }

  let last = str.slice(-1);
  let prevStr = str.slice(0, str.length - 1);

  let prev = letterCombinations(prevStr);

  let charArr = map[last];
  let result = []
  for (var i = 0; i < charArr.length; i++) {
    for (var j = 0; j < prev.length; j++) {
      let string = prev[j] + charArr[i];
      result.push(string)
    }
  }
  return result;
};

var letterCombinations = function(digits) {
    if (digits === null || digits.length === 0) {
        return [];
    }
    const result = [];
    helper(digits, 0, "", result);
    return result;
};

const helper = (digits, pos, str, result) => {
    const keys = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    if (pos === digits.length) {
        result.push(str);
        return;
    }

    const letter = keys[Number(digits[pos])];
    for (let i = 0; i < letter.length; i++) {
        helper(digits, pos + 1, str + letter[i], result);
    }
};
