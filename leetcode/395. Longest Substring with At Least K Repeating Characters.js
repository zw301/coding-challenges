// Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.
//
// Example 1:
//
// Input:
// s = "aaabb", k = 3
//
// Output:
// 3
//
// The longest substring is "aaa", as 'a' is repeated 3 times.
// Example 2:
//
// Input:
// s = "ababbc", k = 2
//
// Output:
// 5
//
// The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

// Time Limit Exceeded
const isValid = function(map, k) {
    let keys = Array.from(map.keys());
    if (keys.length === 0) {
        return false;
    }
    for (let i = 0; i < keys.length; i++) {
        if (map.get(keys[i]) < k) {
            return false;
        }
    }
    return true;
}
var longestSubstring = function(s, k) {

    let max = 0;
    for (let i = 0; i < s.length; i++) {
        const map = new Map();

        let j = i;
        while (j < s.length) {
            if (!map.has(s[j])) {
                map.set(s[j], 0);
            }
            map.set(s[j], map.get(s[j]) + 1);
            j++;
            if (isValid(map, k)) {
                max = Math.max(max, j - i);
            }
        }
    }

    return max;
};
