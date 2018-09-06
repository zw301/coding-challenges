// Selection Sort : 选择i后面所有数字里最小的，放在i这个位置上。
//
// PROPERTIES:
// Not stable
// O(1) extra space
// Θ(n2) comparisons
// Θ(n) swaps
// Not adaptive

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
      exch(arr, i, min);
    }
  }
}

function exch(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}
