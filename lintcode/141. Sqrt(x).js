// 141. Sqrt(x)
// Implement int sqrt(int x).
//
// Compute and return the square root of x.
//
// Example
// sqrt(3) = 1
//
// sqrt(4) = 2
//
// sqrt(5) = 2
//
// sqrt(10) = 3
//
// Challenge
// O(log(x))
/**
 * @param x: An integer
 * @return: The sqrt of x
 */
const sqrt = function (x) {
    if (x <= 0) {
        return 0;
    }

    let start = 1;
    let end = x;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (mid * mid <= x) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (start * start <= x) {
        return start;
    } else {
        return end;
    }
}
