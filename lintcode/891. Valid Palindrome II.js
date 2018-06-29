// 891. Valid Palindrome II
// Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.
//
// Example
// Given s = "aba" return true
// Given s = "abca" return true // delete c
/**
 * @param s: a string
 * @return:
 */
const validPalindrome = function (s) {
    if (s === null || s.length === 0) {
        return true;
    }

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) {
            break;
        }
        left++;
        right--;
    }
    if (left >= right) {
        return true;
    }

    return isSubPalindrom(s, left + 1, right) || isSubPalindrom(s, left, right - 1)
}

const isSubPalindrom = function(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
