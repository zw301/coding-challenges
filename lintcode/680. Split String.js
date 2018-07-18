// 680. Split String
// Give a string, you can choose to split the string after one character or two adjacent characters,
// and make the string to be composed of only one character or two characters.
// Output all possible results.
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
    result.push(subset.slice());
    return;
  }

  for (let i = 1; i < 3; i++) {
    if (startIndex + i <= s.length) {
      subset.push(s.slice(startIndex, startIndex + i));
      helper(s, startIndex + i, subset, result);
      subset.pop();
    }
  }
}

console.log(splitString("123"));
