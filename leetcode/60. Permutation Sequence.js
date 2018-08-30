// The set [1,2,3,...,n] contains a total of n! unique permutations.
//
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
//
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
//
// Note:
//
// Given n will be between 1 and 9 inclusive.
// Given k will be between 1 and n! inclusive.
// Example 1:
//
// Input: n = 3, k = 3
// Output: "213"
// Example 2:
//
// Input: n = 4, k = 9
// Output: "2314"

var getPermutation = function(n, k) {
  const numbers = new Array();
  const factorial = new Array();

  let result = "";

  let sum = 1;
  factorial.push(1);
  for (let i = 1; i <= n; i++) {
    sum *= i;
    fatorial.push(sum);
  }

  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }

  k--;

  for (let i = 1; i <= n; i++) {
    let index = Math.floor(k / factorial[n - 1]);
    result += String(numbers[index]);
    numbers.splice(index, 1);
    k -= index * factorial[n - i];
  }

  return result;
}
