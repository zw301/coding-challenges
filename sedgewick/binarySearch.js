 var bs = function (nums, target) {
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

// var bs = function(nums, target) {
//   if (nums === null || nums.length === 0) {
//     return -1;
//   }
//   let start = 0;
//   let end = nums.length - 1;
//
//   while (start + 1 < end) {
//     let mid = start + Math.floor((end - start) / 2);
//
//     if (nums[mid] === target) {
//       return mid;
//     } else if (nums[mid] < target) {
//       start = mid;
//     } else {
//       end = mid;
//     }
//
//     if (nums[start] === target) {
//       return start;
//     }
//     if (nums[end] === target) {
//       return end;
//     }
//   }
//   return -1;
// }

var bs = function(nums, target) {
  if (nums === null || nums.length === 0) {
    return -1;
  }

  let start = 0;
  let end = nums.length - 1;

  while (start + 1 < end) {
    let mid = start + Math.floor((end - start) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid;
    } else {
      end = mid;
    }

    if (nums[start] === target) {
      return start;
    }
    if (nums[end] === target) {
      return end;
    }
  }
  return -1;
}

console.log(bs([1,2,3,4,5,6], 3))
