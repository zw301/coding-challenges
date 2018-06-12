// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.
//
// Each letter in the magazine string can only be used once in your ransom note.
//
// Note:
// You may assume that both strings contain only lowercase letters.
//
// canConstruct("a", "b") -> false
// canConstruct("aa", "ab") -> false
// canConstruct("aa", "aab") -> true

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const map = {};

  for (let i = 0; i < magazine.length; i++) {
    let char = magazine[i];
    if (map[char] !== undefined) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let char2 = ransomNote[i];
    if (map[char2] === undefined) {
      return false;
    } else {
      map[char2]--;
      if (map[char2] < 0) {
        return false;
      }
    }
  }

  return true;
};
