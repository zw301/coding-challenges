// 414. Divide Two Integers
// Divide two integers without using multiplication, division and mod operator.
//
// If it is overflow, return 2147483647
//
// Example
// Given dividend = 100 and divisor = 9, return 11.
/**
 * @param dividend: the dividend
 * @param divisor: the divisor
 * @return: the result
 */
const divide = function (dividend, divisor) {
  if (dividend === -Infinity && divisor = -1 || divisor === 0) {
    return Infinity;
  }

  let sign = (dividend < 0) ^ (divisor < 0) ? -1 : 1;
  let dvd = Math.abs(dividend);
  let div = Math.abs(divisor);

  let res = 0;

  while (dvd >= div) {
    let multiple = 1;
    let tmp = div;
    while (dvd >= (tmp << 1)) {
      tmp <<= 1;
      multiple <<= 1;
    }
    res += multiple;
    dvd -= tmp;
  }
  return sign === -1 ? -res : res;
}

//////////
// the trick is: JavaScript bitwise op is for signed 32-bit, so while ((tmp << 1) <= dividend) {...}
// doesn't work. Because "base" overflows.
//
// while (tmp <= (dividend >> 1)) {...}

///////////
var divide = function(dividend, divisor) {    
    if (divisor === 0) return 0;
    if (dividend === 0) return 0;
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    
    let sign = dividend < 0 ^ divisor < 0 ? -1 : 1;

    dvd = Math.abs(dividend);
    div = Math.abs(divisor);
    
    let res = 0;
    
    while (dvd >= div) {
        let multiple = 1;
        let tmp = div;
        // overflow trick
        while (tmp <= (dvd >> 1)) {
            tmp <<= 1;
            multiple <<= 1;
        }
        res += multiple;
        dvd -= tmp;
    }

    return sign === -1 ? -res : res;
};
