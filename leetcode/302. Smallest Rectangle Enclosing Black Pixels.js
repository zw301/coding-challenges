// An image is represented by a binary matrix with 0 as a white pixel and 1 as a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. Given the location (x, y) of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.
//
// Example:
//
// Input:
// [
//   "0010",
//   "0110",
//   "0100"
// ]
// and x = 0, y = 2
//
// Output: 6
/**
 * @param {character[][]} image
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var minArea = function(image, x, y) {

    // left bound
    let start = 0;
    let end = y;
    while (start + 1 < end) {
        let midCol = start + Math.floor((end - start) / 2);
        if (checkCol(image, midCol)) {
            end = midCol;
        } else {
            start = midCol;
        }
    }
    let left;
    if (checkCol(image, start)) {
        left = start;
    } else {
        left = end;
    }

    // right bound
    start = y;
    end = image[0].length - 1;
    while (start + 1 < end) {
        let midCol = start + Math.floor((end - start) / 2);
        if (checkCol(image, midCol)) {
            start = midCol;
        } else {
            end = midCol
        }
    }
    let right;
    if (checkCol(image, end)) {
        right = end;
    } else {
        right = start;
    }

    // top bound
    start = 0;
    end = x;
    while (start + 1 < end) {
        let midRow = start + Math.floor((end - start) / 2);
        if (checkRow(image, midRow)) {
            end = midRow;
        } else {
            start = midRow;
        }
    }
    let top;
    if (checkRow(image, start)) {
        top = start;
    } else {
        top = end;
    }

    // bottom bound
    start = x;
    end = image.length - 1;
    while (start + 1 < end) {
        let midRow = start + Math.floor((end - start) / 2);
        if (checkRow(image, midRow)) {
            start = midRow;
        } else {
            end = midRow;
        }
    }
    let bottom;
    if (checkRow(image, end)) {
        bottom = end;
    } else {
        bottom = start;
    }

    return (right - left + 1) * (bottom - top + 1);
};

const checkRow = function(image, row) {
    for (let j = 0; j < image[row].length; j++) {
        if (image[row][j] === "1") {
            return true;
        }
    }
    return false;
};

const checkCol = function(image, col) {
    for (let i = 0; i < image.length; i++) {
        if (image[i][col] === "1") {
            return true;
        }
    }
    return false;
};
