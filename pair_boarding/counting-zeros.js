// Counting Zeros
// Count Total number of zeros from 1 upto n?
// Answer
// If n = 50. number of 0s would be 11 (0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100). Please note that 100 has two 0s.
// This one looks simple but can be a little tricky.

function countZero(n){
  var count = 0;
  while(n > 0){
   count += Math.floor(n / 10);
   n = n / 10;
  }
  return count;
}

function countZeros(n) {
  let i = 10;
  let count = 0;
  while (i <= n) {
    count += Math.floor(n / i);
    i *= 10;
  }

  return count;
}

countZeros(2014);
