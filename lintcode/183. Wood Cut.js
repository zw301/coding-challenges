// 183. Wood Cut
// Given n pieces of wood with length L[i] (integer array). Cut them into small pieces to guarantee you could have equal or more than k pieces with the same length. What is the longest length you can get from the n pieces of wood? Given L & k, return the maximum length of the small pieces.
//
// Example
// For L=[232, 124, 456], k=7, return 114.
//
// Challenge
// O(n log Len), where Len is the longest length of the wood.
/**
 * @param L: Given n pieces of wood with length L[i]
 * @param k: An integer
 * @return: The maximum length of the small pieces
 */
const woodCut = function (L, k) {
    if (L === null || L.length === 0) {
        return 0;
    }
    let start = 1;
    let end = 1;
    for (let i = 0; i < L.length; i++) {
        end = Math.max(end, L[i]);
    }

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (getPieces(L, mid) < k) {
            end = mid;
        } else {
            start = mid;
        }
    }
    if (getPieces(L, end) >= k) {
        return end;
    } else if (getPieces(L, start) >= k){
        return start;
    }
    return 0;
}

const getPieces = function(L, length) {
    let count = 0;
    for (let i = 0; i < L.length; i++) {
        count += Math.floor(L[i] / length);
    }
    return count;
}
