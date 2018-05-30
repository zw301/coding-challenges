// Given an array of characters, compress it in-place.
//
// The length after compression must always be smaller than or equal to the original array.
//
// Every element of the array should be a character (not int) of length 1.
//
// After you are done modifying the input array in-place, return the new length of the array.
//
//
// Follow up:
// Could you solve it using only O(1) extra space?
// Example 1:
// Input:
// ["a","a","b","b","c","c","c"]
//
// Output:
// Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
//
// Explanation:
// "aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".
// Example 2:
// Input:
// ["a"]
//
// Output:
// Return 1, and the first 1 characters of the input array should be: ["a"]
//
// Explanation:
// Nothing is replaced.
// Example 3:
// Input:
// ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
//
// Output:
// Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
//
// Explanation:
// Since the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
// Notice each digit has it's own entry in the array.
// Note:
// All characters have an ASCII value in [35, 126].
// 1 <= len(chars) <= 1000.
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
  let i = 0;
  let j = 1;

  while (i < chars.length && j < chars.length) {
    if (chars[i] === chars[j]) {
      i++;
    }
    count = i - j + 1;
    if (count !== 1) {
      countStr = String(count);
      let k = 0;
      while (k < countStr.length) {
        chars[j] = countStr[k];
        k++;
        j++;
      }
    }
    chars[j] = chars[i];
    j++;
    i++;
  }

  return j - 1;
};

var compress = function(chars) {
  let say = 0;
  let write = 0;
  for (let read = 0; read < chars.length; read++) {
    if (read === chars.length - 1 || chars[read] !== chars[read + 1]) {
      chars[write] = chars[say];
      write++;
      if (read - say > 0) {
        let count = String(read - say + 1);
        for (var i = 0; i < count.length; i++) {
          chars[write] = count[i];
          write++;
        }
      }
      say = read + 1;
    }
  }
  return write;
}

console.log(compress(["a","a","b","b","c","c","c"])) //6
console.log(compress(["a"])) //1
console.log(compress(["a","b","b","b","b","b","b","b","b","b","b","b","b"])) //4
