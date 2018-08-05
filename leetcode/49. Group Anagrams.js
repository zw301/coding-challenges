// Given an array of strings, group anagrams together.
//
// Example:
//
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:
//
// All inputs will be in lowercase.
// The order of your output does not matter.
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const sorted = strs.map(str => {
      return str.split("").sort(function(x, y) {
        return x < y ? -1 : 1;
      }).join("");
    })

    const result = [];
    const checked = {};
    let target;

    for (let i = 0; i < sorted.length; i++) {
      target = sorted[i];
      if (checked[target]) {
        continue;
      }
      let curr = [];
      for (let j = 0; j < strs.length; j++) {
        if (sorted[j] === target) {
          curr.push(strs[j]);
        }
      }
      checked[target] = true;
      result.push(curr);
    }
    return result;
};

var groupAnagrams = function(strs) {
  const sorted = strs.map(str => {
    return str.split("").sort().join("");
  })

  const map = new Map();

  for (var i = 0; i < sorted.length; i++) {
    if (map.has(sorted[i])) {
      map.get(sorted[i]).push(strs[i]);
    } else {
      map.set(sorted[i], [strs[i]]);
    }
  }

  return Array.from(map.values());
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
