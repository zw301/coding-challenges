// 32. Minimum Window Substring
// Given a string source and a string target, find the minimum window in source which will contain all the characters in target.
//
// Example
// For source = "ADOBECODEBANC", target = "ABC", the minimum window is "BANC"
//
// Challenge
// Can you do it in time complexity O(n) ?
const minWindow = function (source , target) {
  if (source === null || source.length === 0 || target === null || target.length === 0) {
        return "";
  }
  if (source.length < target.length) {
      return "";
  }

  let minLength = source.length;
  let minWindow = "";

  let sourceMap = new Array(256).fill(0);
  let targetMap = new Array(256).fill(0);

  for (let i = 0; i < target.length; i++) {
    targetMap[target.charCodeAt(i)]++;
  }

  let left = 0;
  let right = 0;

  for (left = 0; left < source.length; left++) {
    while (!isValid(sourceMap, targetMap) && right < source.length) {
      sourceMap[source.charCodeAt(right)]++;
      right++;
    }
    if (isValid(sourceMap, targetMap)) {
      if (right - left <= minLength) {
        minLength = right - left;
        minWindow = source.substring(left, right);
      }
    }
    sourceMap[source.charCodeAt(left)]--;
  }
  return minWindow;
}

const isValid = function(sourceMap, targetMap) {
  for (let i = 0; i < sourceMap.length; i++) {
    if (targetMap[i] > sourceMap[i]) {
      return false;
    }
  }
  return true;
}

////////////////////////////////
const minWindow = function (source , target) {
    if (source === null || source.length === 0 || target === null || target.length === 0) {
        return "";
    }
    if (source.length < target.length) {
        return "";
    }

    const targetMap = new Array(256).fill(0);
    const sourceMap = new Array(256).fill(0);

    let minLen = source.length;
    let minWindow = "";

    for (let i = 0; i < target.length; i++) {
        targetMap[target.charCodeAt(i)]++;
    }

    let left = 0;
    let right = 0;

    while (left < sourceMap.length) {
        while (!isValid(sourceMap, targetMap) && right < source.length) {
            sourceMap[source.charCodeAt(right)]++;
            right++;
        }
        if (isValid(sourceMap, targetMap)) {
            if (right - left <= minLen) {
                minLen = right - left;
                minWindow = source.substring(left, right);
            }
        }
        sourceMap[source.charCodeAt(left)]--;
        left++;
    }
    return minWindow;

}

const isValid = function(sourceMap, targetMap) {
    for (let i = 0; i < sourceMap.length; i++) {
        if (targetMap[i] > sourceMap[i]) {
            return false;
        }
    }
    return true;
}
