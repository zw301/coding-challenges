// 437. Copy Books
// Given n books and the ith book has A[i] pages. You are given k people to copy the n books.
//
// n books list in a row and each person can claim a continous range of the n books. For example one copier can copy the books from ith to jth continously, but he can not copy the 1st book, 2nd book and 4th book (without 3rd book).
//
// They start copying books at the same time and they all cost 1 minute to copy 1 page of a book. What's the best strategy to assign books so that the slowest copier can finish at earliest time?
//
// Example
// Given array A = [3,2,4], k = 2.
//
// Return 5( First person spends 5 minutes to copy book 1 and book 2 and second person spends 4 minutes to copy book 3. )
/**
 * @param pages: an array of integers
 * @param k: An integer
 * @return: an integer
 */
const copyBooks = function (pages, k) {
    if (pages === null || pages.length === 0) {
        return 0;
    }

    let start = pages[0];
    let end = pages[0];
    for (let i = 1; i < pages.length; i++) {
        start = Math.max(start, pages[i]);
        end += pages[i];
    }


    while (start + 1 < end) {
        let mid = start + Math.floor((end - start) / 2);
        if (getPeople(pages, mid) > k) {
            start = mid;
        } else {
            end = mid;
        }
    }
    if (getPeople(pages, start) <= k) {
        return start;
    }
    return end;
}

const getPeople = function(pages, minTime) {
    let sum = 0;
    let people = 1;

    for (let i = 0; i < pages.length; i++) {
        if (sum + pages[i] > minTime) {
            people++;
            sum = 0;
        }
        sum += pages[i];
    }
    return people;
}
