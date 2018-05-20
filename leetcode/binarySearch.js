function bs(nums, target) {
  let lo = 0;
  let hi = nums.length - 1;

  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (target < nums[mid]) {
      hi = mid - 1;
    } else if (target > nums[mid]) {
      lo = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
}

console.log(bs([1,2,3,4,5,6], 6))
