// 383. Container With Most Water
// Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.
//
// Example
// Given [1,3,2], the max area of the container is 2.
const maxArea = function (heights) {
  if (heights === null || heights.length === 0) {
    return 0;
  }

  let left = 0;
  let right = heights.length - 1;
  let max = -Infinity;

  while (left < right) {
    let area = (right - left) * Math.min(heights[right], heights[left]);
    max = Math.max(max, area);

    if (heights[left] < heights[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
}
