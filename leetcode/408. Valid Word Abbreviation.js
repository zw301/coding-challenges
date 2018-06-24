// Given a non-empty string s and an abbreviation abbr, return whether the string matches with the given abbreviation.
//
// A string such as "word" contains only the following valid abbreviations:
//
// ["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]
// Notice that only the above abbreviations are valid abbreviations of the string "word". Any other string is not a valid abbreviation of "word".
//
// Note:
// Assume s contains only lowercase letters and abbr contains only lowercase letters and digits.
//
// Example 1:
// Given s = "internationalization", abbr = "i12iz4n":
//
// Return true.
// Example 2:
// Given s = "apple", abbr = "a2e":
//
// Return false.
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
var validWordAbbreviation = function(word, abbr) {
  if (word === null && abbr === null) {
    return false;
  }
  let i = 0;
  let j = 0;

  while (i < word.length && j < abbr.length) {
    if (abbr[j] >= "0" && abbr[j] <= "9") {
      if (abbr[j] === "0") {
        return false;
      }
      let val = 0;
      while (j < abbr.length && abbr[j] >= "0" && abbr[j] <= "9") {
        val = val * 10 + Number(abbr[j]);
        j++;
      }
      i += val;
    } else {
      if (word[i] !== abbr[j]) {
        return false;
      }
      i++;
      j++;
    }
  }
  return i === word.length && j === abbr.length;
};

let s = "internationalization";
let abbr = "i12iz4n";
console.log(validWordAbbreviation("a", "2"));
