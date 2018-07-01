// 254. Drop Eggs
// There is a building of n floors. If an egg drops from the k th floor or above, it will break. If it's dropped from any floor below, it will not break.
//
// You're given two eggs, Find k while minimize the number of drops for the worst case. Return the number of drops in the worst case.
//
// Example
// Given n = 10, return 4.
// Given n = 100, return 14.254. Drop Eggs
// There is a building of n floors. If an egg drops from the k th floor or above, it will break. If it's dropped from any floor below, it will not break.
//
// You're given two eggs, Find k while minimize the number of drops for the worst case. Return the number of drops in the worst case.
//
// Example
// Given n = 10, return 4.
// Given n = 100, return 14.
const dropEggs = function (n) {

    let index = 1;

    while (index * (index + 1) / 2 < n) {
        index *= 2;
    }

    let start = 1;
    let end = index;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (mid * (mid + 1) / 2 >= n) {
            end = mid;
        } else {
            start = mid;
        }
    }

    console.log({start, end})
    if (start * (start + 1) / 2 >= n) {
        return start;
    } else {
        return end;
    }
}


//////wrong
const dropEggs = function (n) {
    let start = 1;
    let end = n;

    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);

        if (sum(mid) < n) {
            start = mid;
        } else {
            end = mid;
        }
    }

    if (sum(start) > n) {
        return start;
    } else {
        return end;
    }
}

const sum = function (num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += i;
    }
    return sum;
}
