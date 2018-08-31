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
    helper(s, 0, "", 0, result);
    return result;
};

const helper = function(ip, startIndex, path, count, result) {
  if (count > 4) {
    return;
  }
  if (count === 4 && startIndex === ip.length) {
    result.push(path);
    return;
  }

  for (let i = 1; i < 4; i++) {
    if (startIndex + i > ip.length) {
      return;
    }
    let substr = ip.slice(startIndex, startIndex + i);
    if (substr.length > 1 && substr.startsWith('0') || (i === 3 && Number(substr) > 255)) {
      continue;
    }
    helper(ip, startIndex + i, path + substr + (count === 3 ? "" : "."), count + 1, result);
  }
}


console.log(restoreIpAddresses("25525511135"));
