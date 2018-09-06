// You are given an almost sorted array of length k.
// Write a function that will return the number of out of place elements
// that can be removed while leaving only the sorted array leftover.
// Elements can only be taken out of the array one at a time and the
// leftover array must remain sorted each time you take an element out.
// If taking an element out would cause the array to be unsorted than
// you may not remove that element.
// If no elements can be removed than return 0.

function outOfPlaceChecker(arr) {
  let outOfPlace = false;
  let count = 0;
  let i = 0;

  while (i < arr.length) {
    if (i + 1 < arr.length && arr[i] > arr[i + 1] && outOfPlace === true) {
      return 0;
    }

    if (arr[i] > arr[i + 1]) {
      outOfPlace = true;

      if (i + 2 < arr.length && arr[i + 2] > arr[i]) {
        count = 2;
      } else {
        count = 1;
      }
    }
    i++;
  }

  if (outOfPlace) {
    return count;
  }

  return arr.length;
}

console.log(outOfPlaceChecker([2,1,3,4]))
console.log(outOfPlaceChecker([2,0,1,4]))
console.log(outOfPlaceChecker([2,1,3,4,0]))
console.log(outOfPlaceChecker([2,7,3,4]))
console.log(outOfPlaceChecker([2,1]))
