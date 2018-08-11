// Compare two version numbers version1 and version2.
// If version1 > version2 return 1; if version1 < version2 return -1;otherwise return 0.
//
// You may assume that the version strings are non-empty and contain only digits and the . character.
// The . character does not represent a decimal point and is used to separate number sequences.
// For instance, 2.5 is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.
//
// Example 1:
//
// Input: version1 = "0.1", version2 = "1.1"
// Output: -1
// Example 2:
//
// Input: version1 = "1.0.1", version2 = "1"
// Output: 1
// Example 3:
//
// Input: version1 = "7.5.2.4", version2 = "7.5.3"
// Output: -1
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// Time O(n)  Space O(n)
var compareVersion = function(version1, version2) {
  const v1Arr = version1.split(".");
  const v2Arr = version2.split(".");

  let i = 0;
  let j = 0;

  while (i < v1Arr.length || j < v2Arr.length) {
    let v1 = i < v1Arr.length ? Number(v1Arr[i]) : 0;
    let v2 = j < v2Arr.length ? Number(v2Arr[j]) : 0;

    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    }
    i++;
    j++;
  }
  return 0;
};


// Time O(n)  Space O(1)
var compareVersion = function(version1, version2) {
  let v1 = 0;
  let v2 = 0;

  let i = 0;
  let j = 0;

  while (i < version1.length || j < version2.length) {
    while (i < version1.length && version1[i] !== ".") {
      v1 = v1 * 10 + Number(version1[i]);
      i++;
    }
    while (j < version2.length && version2[j] !== ".") {
      v2 = v2 * 10 + Number(version2[j]);
      j++;
    }

    if (v1 < v2) {
      return -1;
    } else if (v1 > v2) {
      return 1;
    } else {
      i++;
      j++;
      v1 = 0;
      v2 = 0;
    }
  }
  return 0;
};
