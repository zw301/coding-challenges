// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.
//
// Note:
//
// The same word in the dictionary may be reused multiple times in the segmentation.
// You may assume the dictionary does not contain duplicate words.
// Example 1:
//
// Input: s = "leetcode", wordDict = ["leet", "code"]
// Output: true
// Explanation: Return true because "leetcode" can be segmented as "leet code".
// Example 2:
//
// Input: s = "applepenapple", wordDict = ["apple", "pen"]
// Output: true
// Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//              Note that you are allowed to reuse a dictionary word.
// Example 3:
//
// Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// Output: false
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// We want to know whether s(0~i) can be break, where i = s.length - 1
// For any given i, if we find a j that s(0~j) can be break, and s(j, i) is in the dictionary
// We know that s(0~i) can be break

var wordBreak = function(s, wordDict) {
  if (s === null || s.length === 0) {
    return false;
  }

  const canbreak = new Array(s.length + 1).fill(false);
  canbreak[0] = true;

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      if (canbreak[j] && wordDict.includes(s.substring(j, i))) {
        canbreak[i] = true;
      }
    }
  }
  return canbreak[s.length];
};

var wordBreak = function(s, wordDict) {
  const queue = [];
  queue.push(0);

  const visited = new Array(s.length).fill(false);

  while (queue.length !== 0) {
    let start = queue.shift();
    if (!visited[start]) {
      for (let i = start + 1; i <= s.length; i++) {
        if (wordDict.includes(s.substring(start, i))) {
          if (i === s.length) {
            return true;
          }
          queue.push(i);
        }
      }
      visited[start] = true;
    }
  }
  return false;
}
