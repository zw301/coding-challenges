// Given a 2D board containing 'X' and 'O' (the letter O),
// capture all regions surrounded by 'X'.
//
// A region is captured by flipping all 'O's into 'X's in that surrounded region.
//
// Example:
//
// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:
//
// X X X X
// X X X X
// X X X X
// X O X X
// Explanation:
//
// Surrounded regions shouldn’t be on the border,
// which means that any 'O' on the border of the board are not flipped to 'X'.
// Any 'O' that is not on the border and it is not connected to an 'O'
// on the border will be flipped to 'X'. Two cells are connected if they are
// adjacent cells connected horizontally or vertically.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

class UF {
  constructor(n) {
    this.id = new Array(n);

    for (var i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  find(i) {
    while (i !== this.id[i]) {
      this.id[i] = this.id[this.id[i]];
      i = this.id[i];
    }
    return i;
  }

  union(p, q) {
    const i = this.find(p);
    const j = this.find(q);

    this.id[i] = j;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }
};


var solve = function(board) {
  if (board === null || board.length === 0 || board[0].length === 0) {
    return;
  }

  const m = board.length;
  const n = board[0].length;

  const dirX = [0, 0, -1, 1];
  const dirY = [1, -1, 0, 0];

  const uf = new UF(m * n + 1);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if(board[i][j] === "O") {
        if(isEdge(m, n, i, j)) {
          uf.union(i * n + j, m * n);
        } else {
          for (let k = 0; k < 4; k++) {
            let x = i + dirX[k];
            let y = j + dirY[k];

            if (insideBoard(m, n, x, y) && board[x][y] === "O") {
              uf.union(i * n + j, x * n + y)
            }
          }
        }
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!uf.connected(i * n + j, m * n)) {
        board[i][j] = "X";
      }
    }
  }

  function isEdge(m, n, i, j) {
    return (i === 0 || i === m - 1 || j === 0 || j === n - 1)
  }
  function insideBoard(m, n, i, j) {
    return (i >= 0 && i < m && j >= 0 && j < n);
  }

};
