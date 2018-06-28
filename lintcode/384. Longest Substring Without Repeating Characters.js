//
// 384. Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
//
// Example
// For example, the longest substring without repeating letters for "abcabcbb" is "abc", which the length is 3.
//
// For "bbbbb" the longest substring is "b", with the length of 1.
//
// Challenge
// O(n) time
/**
 * @param s: a string
 * @return: an integer
 */
const lengthOfLongestSubstring = function (s) {
    if (s === null || s.length === 0) {
        return 0;
    }

    const set = new Set();
    let left = 0;
    let right = 0;

    let longest = 0;

    while (left < s.length) {
        while (right < s.length && !set.has(s[right])) {
            set.add(s[right]);
            right++;

            longest = Math.max(longest, right - left);
        }
        set.delete(s[left]);
        left++;
    }
    return longest;
}
