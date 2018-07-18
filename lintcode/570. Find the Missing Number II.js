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
const findMissing2 = function (n, str) {
  
}

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
