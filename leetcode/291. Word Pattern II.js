//
// Given a pattern and a string str, find if str follows the same pattern.
//
// Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty substring in str.
//
// Example 1:
//
// Input: pattern = "abab", str = "redblueredblue"
// Output: true
// Example 2:
//
// Input: pattern = pattern = "aaaa", str = "asdasdasdasd"
// Output: true
// Example 3:
//
// Input: pattern = "aabb", str = "xyzabcxzyabc"
// Output: false
// Notes:
// You may assume both pattern and str contains only lowercase letters.
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */


var wordPatternMatch = function(pattern, str) {
    const map = new Map();
    const set = new Set();
    return match(pattern, str, map, set);
};

const match = (pattern, str, map, set) => {
    if (pattern.length === 0) {
        return str.length === 0;
    }

    let c = pattern[0];
    if (map.has(c)) {
        if (!str.startsWith(map.get(c))) {
            return false;
        }
        return match(
          pattern.substring(1),
          str.substring(map.get(c).length),
          map,
          set
        );
    }
    for (let i = 0; i < str.length; i++) {
        let word = str.substring(0, i + 1);
        if (set.has(word)) {
            continue;
        }
        map.set(c, word);
        set.add(word);
        if (match(pattern.substring(1), str.substring(i + 1), map, set)) {
            return true;
        }
        map.delete(c);
        set.delete(word);
    }
    return false;
};

let pattern = "abab";
let str = "redblueredblue";

pattern = "aabb";
str = "xyzabcxzyabc";

console.log(wordPatternMatch(pattern, str))
