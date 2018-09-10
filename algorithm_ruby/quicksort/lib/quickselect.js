function findKthSmallest(arr, k) {
  if(arr == null || arr.length == 0 || k <= 0) {
    return -1
  }

  let lo = 0;
  let hi = arr.length - 1;
  partitionSmallest(arr, lo, hi, k);

  return arr[k - 1]
}

function partitionSmallest(arr, lo, hi, pos) {
  if(hi <= lo) return

  let pivot = arr[lo];
  let lt = lo;
  let gt = hi;
  let i = lo;

  while( i <= gt ) {
    if( arr[i] < pivot ) {
      swap(arr, lt++, i++)
    } else if (arr[i] > pivot) {
      swap(arr, gt--, i)
    } else {
      i++
    }
  }

  if(lt < pos) {
    partitionSmallest(arr, lt + 1, hi, pos)
  }
  if(lt > pos) {
    partitionSmallest(arr, lo, lt - 1, pos)
  }
}


let arr = [2,9,3,1,1,1,5]
console.log(findKthSmallest(arr, 3))


////////////////////////


function findKthLargest(arr, k) {
  if(arr == null || arr.length == 0 || k <= 0) {
    return -1
  }

  k = arr.length - k;

  let lo = 0;
  let hi = arr.length - 1;
  partition1(arr, lo, hi, k);

  return arr[k]
}


function partition1(arr, lo, hi, pos) {
  if(hi <= lo) return

  let pivot = arr[lo];
  let lt = lo;
  let gt = hi;
  let i = lo;

  while( i <= gt ) {
    if( arr[i] < pivot ) {
      swap(arr, lt++, i++)
    } else if (arr[i] > pivot) {
      swap(arr, gt--, i)
    } else {
      i ++
    }
  }

  if(lt < pos) {
    partition(arr, lt + 1, hi, pos)
  }
  if(lt > pos) {
    partition(arr, lo, lt - 1, pos)
  }
}


// arr = [9,8,3,7,7,5,1];
// console.log(findKthLargest(arr, 2))
//




function quicksort(arr, lo, hi) {
  if (hi <= lo) return;
  let lt = lo;
  let gt = hi;

  pivot = arr[lo];

  let i = lo;

  while(i <= gt) {
    if(arr[i] < pivot) {
      swap(arr, lt, i);
      lt++;
      i++;
    } else if (arr[i] > pivot) {
      swap(arr, i, gt)
      gt--;
    } else {
      i++;
    }
  }

  quicksort(arr, lo, lt - 1)
  quicksort(arr, gt + 1, hi)
}

function swap(arr, i, j) {
  let tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

// arr = [9,8,3,7,7,5,1];
// quicksort(arr, 0, 6)
// console.log(arr)
