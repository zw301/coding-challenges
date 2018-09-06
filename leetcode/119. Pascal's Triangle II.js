// 119. Pascal's Triangle II
// Given a non-negative index k where k ≤ 33, return the kth index row of the Pascal's triangle.
//
// Note that the row index starts from 0.
// Example:
//
// Input: 3
// Output: [1,3,3,1]
// Follow up:
//
// Could you optimize your algorithm to use only O(k) extra space?
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let curr = [1];

    let i = 1;
    while (i <= rowIndex) {
        let prev = curr;
        curr = [];
        curr.push(1);

        for (let j = 1; j < prev.length; j++) {
            curr.push(prev[j - 1] + prev[j]);
        }
        curr.push(1);
        i++;
    }

    return curr;
};
