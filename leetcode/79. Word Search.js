// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.
//
// Example:
//
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (helper(board, i, j, 0, word)) {
        return true;
      }
    }
  }
  return false;
};

const helper = function(board, i, j, pos, word) {
  if (!inBound(board, i, j) || board[i][j] !== word[pos]) {
    return false;
  }
  if (pos === word.length - 1) {
    return true;
  }

  board[i][j] = "#";
  const result = helper(board, i + 1, j, pos + 1, word) ||
    helper(board, i - 1, j, pos + 1, word) ||
    helper(board, i, j + 1, pos + 1, word) ||
    helper(board, i, j - 1, pos + 1, word);
  board[i][j] = word[pos];

  return result;
};

const inBound = function(board, i, j) {
  return i >= 0 && i < board.length && j >= 0 && j < board[0].length;
};
