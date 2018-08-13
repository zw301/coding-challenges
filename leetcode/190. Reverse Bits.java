// Reverse bits of a given 32 bits unsigned integer.
//
// Example:
//
// Input: 43261596
// Output: 964176192
// Explanation: 43261596 represented in binary as 00000010100101000001111010011100,
//              return 964176192 represented in binary as 00111001011110000010100101000000.
// Follow up:
// If this function is called many times, how would you optimize it?
public class Solution {
    // you need treat n as an unsigned value
    public int reverseBits(int n) {
        int result = 0;
        for (int i = 0; i < 32; i++) {
            int digit = ((n >> i) & 1);
            result |= (digit << (31 - i));
        }
        return result;
    }
}


//之前对位操作不是很熟，经过这题有所理解。
// js的符号位是挥之不去的，而当作位操作时，js的位操作限制在32位，除去一个符号位，
// 其上限只能达到2^31 - 1，so，符号位上的数值需要单独计算

var reverseBits = function(n) {
	var tmp;
  var res = 0;
	var count = 1;
	var sign = n & 1;
	n = n >>> 1;

    while(n){
    	tmp = n & 1;
    	res = res | tmp << (31-count);
    	++count;
    	n = n >>> 1;
    }
    if(sign){
    	res += 2147483648;
    }
    return res;
};
