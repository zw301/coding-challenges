// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.
//
// Example 1:
//
// Input: num1 = "2", num2 = "3"
// Output: "6"
// Example 2:
//
// Input: num1 = "123", num2 = "456"
// Output: "56088"
// Note:
//
// The length of both num1 and num2 is < 110.
// Both num1 and num2 contain only digits 0-9.
// Both num1 and num2 do not contain any leading zero, except the number 0 itself.
// You must not use any built-in BigInteger library or convert the inputs to integer directly.
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const n1 = num1.length;
  const n2 = num2.length;

  const product = new Array(n1 + n2).fill(0);

  for (let i = n1 - 1; i >= 0; i--) {
    for (let j = n2 - 1; j >= 0; j--) {
      product[i + j + 1] += (Number(num1[i])) * (Number(num2[j]));
    }
  }

  let carry = 0;
  for (let i = n1 + n2 - 1; i >= 0; i--) {
    let digit = (product[i] + carry) % 10;
    carry = Math.floor((product[i] + carry) / 10);
    product[i] = digit;
  }

  let str = product.join("");
  while (str.length > 0 && str[0] === "0") {
    str = str.slice(1);
  }

  return str.length === 0 ? "0" : str;
};
