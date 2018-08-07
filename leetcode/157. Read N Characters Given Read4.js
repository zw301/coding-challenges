// The API: int read4(char *buf) reads 4 characters at a time from a file.
//
// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.
//
// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.
//
// Example 1:
//
// Input: buf = "abc", n = 4
// Output: "abc"
// Explanation: The actual number of characters read is 3, which is "abc".
// Example 2:
//
// Input: buf = "abcde", n = 5
// Output: "abcde"
// Note:
// The read function will only be called once for each test case.
/**
 * Definition for read4()
 *
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function(read4) {
   /**
    * @param {character[]} buf Destination buffer
    * @param {number} n Maximum number of characters to read
    * @return {number} The number of characters read
    */
   return function(buf, n) {
       const tmpbuff = new Array(4);
       let tmpOffset = 0;
       let tmpCount = 0;

       let count = 0;
       while (count < n) {
         if (tmpOffset === tmpCount) {
           tmpCount = read4(tmpbuff);
           tmpOffset = 0;
         }
         if (tmpCount === 0) {
           break;
         }
         while (count < n && tmpOffset < tmpCount) {
           buf[count++] = tmpbuff[tmpOffset++]
         }
       }
       return count;
   };
};
