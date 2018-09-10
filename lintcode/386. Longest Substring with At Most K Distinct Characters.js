// 386. Longest Substring with At Most K Distinct Characters
// Given a string s, find the length of the longest substring T that contains at most k distinct characters.
//
// Example
// For example, Given s = "eceba", k = 3,
//
// T is "eceb" which its length is 4.
//
// Challenge
// O(n), n is the size of the string s.
const lengthOfLongestSubstringKDistinct = function (s, k) {
  if (s === null || s.length === 0 || k === 0) {
    return 0;
  }
  if (s.length <= k) {
    return s.length;
  }

  let left = 0;
  let right = 0;
  let maxLen = 0;

  const map = new Map();

  while (left < s.length) {
    while (right < s.length && map.size <= k) {
      let c = s[right];
      if (map.has(c)) {
        map.set(c, map.get(s) + 1);
      } else {
        if (map.size === k) {
          break;
        } else {
          map.set(c, 1);
        }
      }
      right++;
      maxLen = Math.max(maxLen, right - left);
    }

    if (map.size === k) {
      let c = s[left];
      if (map.get(c) > 1) {
        map.set(c, map.get(c) - 1);
      } else {
        map.delete(c);
      }
    }
    left++;
  }

  return maxLen;
}

// 09.10
var lengthOfLongestSubstringKDistinct = function(s, k) {
    const map = new Map();

    let maxLen = 0;

    let j = 0;
    for (let i = 0; i < s.length; i++) {
        while (j < s.length) {
            let char = s[j];
            if (map.has(char)) {
                map.set(char, map.get(char) + 1);
            } else {
                if (map.size === k) {
                    break;
                }
                map.set(char, 1);
            }
            j++;
        }
        if (map.size <= k) {
            maxLen = Math.max(maxLen, j - i);
        }

        if (map.get(s[i]) > 1) {
            map.set(s[i], map.get(s[i]) - 1);
        } else {
            map.delete(s[i]);
        }
    }

    return maxLen;
};
