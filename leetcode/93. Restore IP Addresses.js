// Given a string containing only digits, restore it by returning all possible valid IP address combinations.
//
// Example:
//
// Input: "25525511135"
// Output: ["255.255.11.135", "255.255.111.35"]

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if (s === null || s.length === 0) {
      return [];
    }

    const result = [];

    helper(s, 0, "", result);

    return result;
};

const helper = function(s, startIndex, str, result) {
  if (startIndex === s.length) {
    result.push(str);
    return;
  }

  for (let i = startIndex; i < s.length; i++) {
    let substr = s.slice(startIndex, i);
    if (substr.length > 1 && substr[0] === '0' ) {
      continue;
    }
    if (Number(substr) >= 0 && Number(substr) <= 255) {
      helper(s, i + 1, str + "." + substr, result);
    }
  }
}

console.log(restoreIpAddresses("25525511135"));
