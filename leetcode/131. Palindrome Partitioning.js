// Given a string s, partition s such that every substring of the partition is a palindrome.
//
// Return all possible palindrome partitioning of s.
//
// Example:
//
// Input: "aab"
// Output:
// [
//   ["aa","b"],
//   ["a","a","b"]
// ]
/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
   if (s === null || s.length === 0) {
     return [];
   }

   const partition = [];
   const result = [];
   helper(s, 0, partition, result);
   return result;
 };

 function helper(s, startIndex, partition, result) {
   if (startIndex === s.length) {
     result.push(partition.slice());
     return;
   }

   // from 'startIndex' find the first valid substring(startIndex - i) and
   // recursive call to find the next valid substring(i - ii);
   for (let i = startIndex; i < s.length; i++) {
     let substr = s.slice(startIndex, i + 1);
     if (!isPalindrome(substr)) {
       continue;
     }
     partition.push(substr);
     helper(s, i + 1, partition, result);
     partition.pop();
   }
 }

 function isPalindrome(str) {
   let i = 0;
   let j = str.length - 1;

   while (i < j) {
     if (str[i] !== str[j]) {
       return false;
     }
     i++;
     j--;
   }
   return true;
 }
