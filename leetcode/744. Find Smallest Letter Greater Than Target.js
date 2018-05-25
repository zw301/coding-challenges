// Given a list of sorted characters letters containing only lowercase letters, and given a target letter target, find the smallest element in the list that is larger than the given target.
//
// Letters also wrap around. For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.
//
// Examples:
// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"
//
// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"
//
// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"
//
// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"
//
// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"
//
// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"
// Note:
// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
  let len = letters.length;
  if (target >= letters[len - 1]) {
    return letters[0];
  }

  let start = 0;
  let end = len - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);
    if (letters[mid] <= target) {
      start = mid;
    } else {
      end = mid;
    }
  }

  if (letters[start] > target) {
    return letters[start];
  } else {
    return letters[end];
  }
};


const letters = ["c", "f", "j"];
console.log(nextGreatestLetter(letters, "a"));
console.log(nextGreatestLetter(letters, "c"));
console.log(nextGreatestLetter(letters, "d"));
console.log(nextGreatestLetter(letters, "g"));
console.log(nextGreatestLetter(letters, "j"));
console.log(nextGreatestLetter(letters, "k"));
