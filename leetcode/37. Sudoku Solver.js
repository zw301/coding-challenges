// Write a program to solve a Sudoku puzzle by filling the empty cells.
//
// A sudoku solution must satisfy all of the following rules:
//
// Each of the digits 1-9 must occur exactly once in each row.
// Each of the digits 1-9 must occur exactly once in each column.
// Each of the the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes of the grid.
// Empty cells are indicated by the character '.'.
// 
// Note:
//
// The given board contain only digits 1-9 and the character '.'.
// You may assume that the given Sudoku puzzle will have a single unique solution.
// The given board size is always 9x9.

var solveSudoku = function(board) {
    helper(board, 0, 0);
};

const helper = function(board, i, j) {
    if (i === 9) {
        return true;
    }
    if (j >= 9) {
        return helper(board, i + 1, 0);
    }
    if (board[i][j] === '.') {
        for (let k = 1; k <= 9; k++) {
            board[i][j] = String(k);
            if (isValid(board, i, j)) {
                if (helper(board, i, j + 1)) {
                    return true;
                }
            }
            board[i][j] = '.';
        }
    } else {
        return helper(board, i, j + 1);
    }
    return false;
}

const isValid = function(board, i, j) {
    for (let col = 0; col < 9; col++) {
        if (col !== j && board[i][j] === board[i][col]) {
            return false;
        }
    }
    for (let row = 0; row < 9; row++) {
        if (row !== i && board[i][j] === board[row][j]) {
            return false;
        }
    }
    for (let row = (i / 3) * 3; row < (i / 3) * 3; row++) {
        for(let col = (j / 3) * 3; col < (j / 3) * 3; col++) {
            if ((row !== i || col !== j) && board[i][j] === board[row][col]) {
                return false;
            }
        }
    }
    return true;
}
