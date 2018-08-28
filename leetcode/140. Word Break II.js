// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:
//
// Input:
// s = "catsanddog"
// wordDict = ["cat", "cats", "and", "sand", "dog"]
// Output:
// [
//   "cats and dog",
//   "cat sand dog"
// ]
// Example 2:
//
// Input:
// s = "pineapplepenapple"
// wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
// Output:
// [
//   "pine apple pen apple",
//   "pineapple pen apple",
//   "pine applepen apple"
// ]
// Explanation: Note that you are allowed to reuse a dictionary word.
// Example 3:
//
// Input:
// s = "catsandog"
// wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output:
// []
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
// suffix
var wordBreak = function(s, wordDict) {
    if (s === null || s.length === 0) {
        return [];
    }
    const map = {};
    return helper(s, wordDict, map);
};

const helper = (s, wordDict, map) => {
    const result = [];
    if (map[s] !== undefined) {
        return map[s];
    }
    if (wordDict.includes(s)) {
        result.push(s);
    }

    for (let i = 1; i < s.length; i++) {
        let suffix = s.substring(i);
        if (wordDict.includes(suffix)) {
            let list = helper(s.substring(0, i), wordDict, map);
            for (let j = 0; j < list.length; j++) {
                result.push(list[j] + " " + suffix);
            }
        }
    }
    map[s] = result;
    return result;
};

//// 8.28 prefix版本
var wordBreak = function(s, wordDict) {
    if (s === null || s.length === 0) {
        return [];
    }

    const map = {};
    helper(s, wordDict, map);

    return map[s];
};

const helper = function(s, wordDict, map) {
    const result = [];
    if (map[s] !== undefined) {
        return map[s];
    }
    if (wordDict.includes(s)) {
        result.push(s);
    }

    for (let i = 1; i < s.length; i++) {
        let prefix = s.substring(0, i);
        if (wordDict.includes(prefix)) {
            let list = helper(s.substring(i), wordDict, map);
            for (let j = 0; j < list.length; j++) {
                result.push(prefix + " " + list[j]);
            }
        }
    }
    map[s] = result;
    return result;
};

let s = "pineapplepenapple";
let wordDict = ["apple", "pen", "applepen", "pine", "pineapple"];
console.log(wordBreak(s, wordDict));
