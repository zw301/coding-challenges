// 570. Find the Missing Number II
// Giving a string with number from 1-n in random order, but miss 1 number.Find that number.
//
// Example
// Given n = 20, str = 19201234567891011121314151618
//
// return 17
/**
 * @param n: An integer
 * @param str: a string with number from 1-n in random order and miss one number
 * @return: An integer
 */
//
// Solution:
// This problem can be solved by depth first search.
// initialize a foundNums boolean array with false value for number from 1 to n.
// If the first digit is less than n, set it as found in foundNums and check the remaining part.
// If the first two digits are less than n, set this number as found in foundNums and check the remaining part.
// Stop when no more digit left, and return the only missing number in foundNums.


// wrong
// const findMissing2 = function (n, str) {
//     const map = {};
//     for (let i = 0; i < str.length; i++) {
//         if (map[str[i]] === undefined) {
//             map[str[i]] = 1;
//         } else {
//             map[str[i]] += 1;
//         }
//     }
//
//     const map2 = {};
//
//     for (let i = 1; i <= n; i++) {
//         let s = String(i);
//         for (let j = 0; j < s.length; j++) {
//             if (map2[s[j]] === undefined) {
//                 map2[s[j]] = 1;
//             } else {
//                 map2[s[j]] += 1;
//             }
//         }
//     }
//
//
//     const result = [];
//     for (let key in map) {
//         if (map[key] !== map2[key]) {
//             result.push(Number(key));
//         }
//     }
//
//     console.log(result)
//     if (result.length === 1) {
//         return result [0];
//     } else {
//         let num1 = result[0] * 10 + result[1];
//         let num2 = result[1] * 10 + result[0];
//
//         if (num1 <= n && num2 <= n) {
//             if (str.indexOf(String(num1)) === -1) {
//                 return num2;
//             } else {
//                 return num1;
//             }
//         } else if (num1 <= n){
//             return num1;
//         } else {
//             return num2;
//         }
//
//     }
// }

/**
 * @param n: An integer
 * @param str: a string with number from 1-n in random order and miss one number
 * @return: An integer
 */
const findMissing2 = function (n, str) {
    let missing = -1;

    const visited = new Array(n + 1).fill(false);

    const helper = (n, str, visited, count) => {
        if (str.length === 0 && count === n - 1) {
            console.log(visited)
            for (let i = 1; i <= n; i++) {
                if (visited[i] === false) {
                    missing = i;
                }
            }
        }

        for (let i = 1; i <= 2 && i <= str.length; i++) {
            let num = Number(str.substring(0, i));
            if (num === 0 || num > n || visited[num]) {
                continue;
            }
            visited[num] = true;
            helper(n, str.substring(i), visited, count + 1);
            visited[num] = false;
        }
    };

    helper(n, str, visited, 0);
    return missing;
}

let str = "19201234567891011121314151618";

console.log(findMissing2(20, str));
