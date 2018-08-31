//
// Validate if a given string is numeric.
//
// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true
//
// Note: It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.
//
// Update (2015-02-10):
// The signature of the C++ function had been updated. If you still see your function signature accepts a const char * argument,
//  please click the reload button to reset your code definition.
/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  const len = s.length;
  let i = 0;
  let j = len - 1;

  while (i <= j && s[i] === ' ') {
    i++;
  }
  if (i > j) {
    return false;
  }
  while (i <= j && s[j] === ' ') {
    j--;
  }
  if (s[i] === '+' || s[i] === '-') {
    i++;
  }

  let num = false;
  let dot = false;
  let exp = false;

  while (i <= j) {
    let c = s[i];
    if (c >= '0' && c <= '9') {
      num = true;
    } else if (c === '.') {
      if (dot || exp) {
        return false;
      }
      dot = true;
    }
    else if (c === 'e') {
      if (exp || !num) {
        return false;
      }
      exp = true;
      num = false;
    }
    else if (c === '+' || c === '-') {
      if (s[i - 1] !== 'e') {
        return false;
      }
    } else {
      return false;
    }
    i++;
  }
  return num;
};
