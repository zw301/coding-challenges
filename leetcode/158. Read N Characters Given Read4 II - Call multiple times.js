// The API: int read4(char *buf) reads 4 characters at a time from a file.
//
// The return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.
//
// By using the read4 API, implement the function int read(char *buf, int n) that reads n characters from the file.
//
// Note:
// The read function may be called multiple times.
//
// Example 1:
//
// Given buf = "abc"
// read("abc", 1) // returns "a"
// read("abc", 2); // returns "bc"
// read("abc", 1); // returns ""
// Example 2:
//
// Given buf = "abc"
// read("abc", 4) // returns "abc"
// read("abc", 1); // returns ""
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
    const tmpbuff = new Array(4);
    let tmpOffset = 0;
    let tmpCount = 0;
    return function(buf, n) {
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
