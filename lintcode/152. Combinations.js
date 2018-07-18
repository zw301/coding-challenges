// 152. Combinations
// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example
// Given n = 4 and k = 2, a solution is:
//
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4]
// ]

/**
 * @param n: Given the range of numbers
 * @param k: Given the numbers of combinations
 * @return: All the combinations of k numbers out of 1..n
 */
const combine = function (n, k) {
    if (n < k || k === 0) {
        return [];
    }

    const result = [];
    dfs(n, k, 1, [], result);
    return result;
}

const dfs = (n, k, startIndex, combination, result) => {
    if (combination.length == k) {
        result.push(combination.slice());
        return;
    }

    for (let i = startIndex; i <= n; i++) {
        combination.push(i);
        dfs(n, k, i + 1, combination, result);
        combination.pop();
    }
}
