// 680. Split String
// Give a string, you can choose to split the string after one character or two adjacent characters, and make the string to be composed of only one character or two characters. Output all possible results.
//
// Example
// Given the string "123"
// return [["1","2","3"],["12","3"],["1","23"]]

const splitString = function(s) {
  if (s === null || s.length === 0) {
    return [];
  }

  const result = [];
  helper(s, 0, [], result);

  return result;
}

const helper = (s, startIndex, subset, result) => {
  if (startIndex === s.length) {
    result.push(subset);
    return;
  }

  for (let i = 1; i < s.length - 1; i++) {
    helper(s, i + 1, str + s[i], result);
  }
}

console.log(splitString("123"));
