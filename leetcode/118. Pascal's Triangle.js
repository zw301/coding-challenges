// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.
// Example:
//
// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows <= 0) {
    return [];
  }

  const result = [];
  result.push([1]);

  let i = 1;
  while (i < numRows) {
    let prev = result[result.length - 1];
    let curr = [];
    curr.push(1);

    for (let j = 1; j < prev.length; j++) {
      curr[j] = prev[j - 1] + prev[j];
    }
    curr.push(1);
    result.push(curr);
    i++;
  }

  return result;
};
