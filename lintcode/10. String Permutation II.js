// 10. String Permutation II
// Given a string, find all permutations of it without duplicates.
//
// Example
// Given "abb", return ["abb", "bab", "bba"].
//
// Given "aabb", return ["aabb", "abab", "baba", "bbaa", "abba", "baab"].
/**
 * @param str: A string
 * @return: all permutations
 */
const stringPermutation2 = function (str) {
    // write your code here
    if (str === null) {
        return [];
    }

    str = str.split("").sort().join("");
    const result = [];
    const visited = new Array(str.length).fill(false);
    helper(str, visited, "", result);
    return result;
}

const helper = (str, visited, substr, result) => {
    if (substr.length === str.length) {
        result.push(substr);
        return;
    }

    for (let i = 0; i < str.length; i++) {
        if (visited[i]) {
            continue;
        }
        if (i > 0 && str[i] === str[i - 1] && !visited[i - 1]) {
            continue;
        }

        substr += str[i];
        visited[i] = true;
        helper(str, visited, substr, result);
        substr = substr.slice(0, substr.length - 1);
        visited[i] = false;
    }
};
