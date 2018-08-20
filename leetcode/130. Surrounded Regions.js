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
 var solve = function(board) {
     if (board === null || board.length === 0 || board[0] === null || board[0].length === 0) {
         return;
     }

     const n = board.length;
     const m = board[0].length;

     const dirX = [-1, 1, 0, 0];
     const dirY = [0, 0, -1, 1];

     const uf = new UF(m * n + 1);

     for (let i = 0; i < n; i++) {
         for (let j = 0; j < m; j++) {
             if (board[i][j] === "O") {
                 if (isEdge(n, m, i, j)) {
                     uf.union(i * m + j, m * n);
                 } else {
                     for (let k = 0; k < 4; k++) {
                         let x = i + dirX[k];
                         let y = j + dirY[k];

                         if (insideBoard(n, m, x, y) && board[x][y] === "O") {
                             uf.union(i * m + j, x * m + y);
                         }
                     }
                 }
             }
         }
     }

     for (let i = 0; i < n; i++) {
         for (let j = 0; j < m; j++) {
             if (!uf.connected(i * m + j, m * n)) {
                 board[i][j] = "X";
             }
         }
     }
 };

 const isEdge = function(n, m, i, j) {
     return i === 0 || i === n - 1 || j === 0 || j === m - 1;
 }

 const insideBoard = function(n, m, i, j) {
     return i >= 0 && i < n && j >= 0 && j < m;
 }

 class UF {
     constructor(n) {
         this.id = [];
         for (let i = 0; i < n; i++) {
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
         let i = this.find(p);
         let j = this.find(q);

         this.id[i] = j;
     }

     connected(p, q) {
         return this.find(p) === this.find(q);
     }
 }
