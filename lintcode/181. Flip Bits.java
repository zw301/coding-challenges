// Determine the number of bits required to flip if you want to convert integer n to integer m.
//
// Example
// Given n = 31 (11111), m = 14 (01110), return 2.
//
// Notice
// Both n and m are 32-bit integers.
public class Solution {
    /**
     * @param a: An integer
     * @param b: An integer
     * @return: An integer
     */
    public int bitSwapRequired(int a, int b) {
        // write your code here
        int xor = a ^ b;
        int count = 0;
        while (xor != 0) {
            xor = xor & (xor - 1);
            count++;
        }
        return count;
    }
}
