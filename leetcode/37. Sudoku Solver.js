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
    for (let row = Math.floor(i / 3) * 3; row < Math.floor(i / 3) * 3 + 3; row++) {
        for(let col = Math.floor(j / 3) * 3; col < Math.floor(j / 3) * 3 + 3; col++) {
            if ((row !== i || col !== j) && board[i][j] === board[row][col]) {
                return false;
            }
        }
    }
    return true;
}


////也过不了

var solveSudoku = function(board) {
    helper(board);
};

const helper = function(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue;
            }
            for(let num = 1; num <= 9; num++) {
                board[i][j] = String(num);
                if (isValid(board) && helper(board)) {
                    return true;
                }
                board[i][j] = ".";
            }
            return false;
        }
    }
    return true;
}

const isValid = function(board) {
    let set = new Set();
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === '.') {
                continue;
            }
            if (set.has(board[i][j])) {
                return false;
            }
            set.add(board[i][j]);
        }
        set.clear();
    }

    for (let j = 0; j < 9; j++) {
        for (let i = 0; i < 9; i++) {
            if (board[i][j] === '.') {
                continue;
            }
            if (set.has(board[i][j])) {
                return false;
            }
            set.add(board[i][j]);
        }
        set.clear();
    }
    for (let k = 0; k < 9; k++) {
        for (let i = Math.floor(k / 3) * 3; i < Math.floor(k / 3) * 3 + 3; i++) {
            for (let j = (k % 3) * 3; j < (k % 3) * 3 + 3; j++) {
                if (board[i][j] === '.') {
                    continue;
                }
                if (set.has(board[i][j])) {
                    return false;
                }
                set.add(board[i][j]);
            }
        }
        set.clear();
    }
    return true;
}
