// Given an array of n objects with k different colors (numbered from 1 to k), sort them so that objects of the same color are adjacent, with the colors in the order 1, 2, ... k.
//
// Example
// Given colors=[3, 2, 2, 1, 4], k=4, your code should sort colors in-place to [1, 2, 2, 3, 4].
//
// Challenge
// A rather straight forward solution is a two-pass algorithm using counting sort. That will cost O(k) extra memory. Can you do it without using extra memory?
/**
 * @param colors: A list of integer
 * @param k: An integer
 * @return:
 */
const sortColors2 = function (colors, k) {
  if (colors === null || colors.length === 0) {
    return colors;
  }
  rainbowSort(colors, 0, colors.length - 1, 1, k);
}

const rainbowSort = function(colors, left, right, colorFrom, colorTo) {
  if (colorFrom === colorTo) {
    return;
  }

  if (left >= right) {
    return;
  }

  let l = left;
  let r = right;

  let colorMid = Math.floor((colorFrom + colorTo) / 2);

  while (l <= r) {
    while (l <= r && colors[l] <= colorMid) {
      l++;
    }
    while (l <= r && colors[r] > colorMid) {
      r--;
    }

    if (l <= r) {
      let tmp = colors[l];
      colors[l] = colors[r];
      colors[r] = tmp;
    }
  }
  rainbowSort(colors, left, r, colorFrom, colorMid);
  rainbowSort(colors, l, right, colorMid + 1, colorTo);
}
