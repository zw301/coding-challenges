// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.
//
// Trapping Rain Water
//
// Example
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.
//
// Challenge
// O(n) time and O(1) memory
//
// O(n) time and O(n) memory is also acceptable
/**
 * @param heights: a list of integers
 * @return: a integer
 */
const trapRainWater = function (heights) {
  if (heights === null || heights.length === 0) {
    return 0;
  }

  let left = 0;
  let right = heights.length - 1;

  let res = 0;

  while (left < right) {
    let height = Math.min(heights[left], heights[right]);

    if (height === heights[left]) {
      left++;
      while (left < right && heights[left] < height) {
        res += height - heights[left];
        left++;
      }
    } else {
      right--;
      while (left < right && heights[right] < height) {
        res += height - heights[right];
        right--;
      }
    }
  }
  return res;
}
