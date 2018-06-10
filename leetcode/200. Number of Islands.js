// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
//
// Example 1:
//
// Input:
// 11110
// 11010
// 11000
// 00000
//
// Output: 1
// Example 2:
//
// Input:
// 11000
// 11000
// 00100
// 00011
//
// Output: 3
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (grid === null || grid.length === 0 || grid[0] === null || grid[0].length === 0) {
    return 0;
  }

  let n = grid.length;
  let m = grid[0].length;
  let island = 0;

  for (let i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if (grid[i][j] === "1") {
        bfs(grid, i, j);
        island++;
      }
    }
  }
  return island;
};

function bfs(grid, x, y) {
  const queue = [];
  queue.push([x, y]);

  const dirX = [-1, 1, 0, 0];
  const dirY = [0, 0, -1, 1];

  while (queue.length !== 0) {
    let [x0, y0] = queue.shift();
    grid[x0][y0] = "0";

    for (let i = 0; i < 4; i++) {
      let [x1, y1] = [x0 + dirX[i], y0 + dirY[i]];
      if (inBound(grid, x1, y1) && grid[x1][y1] === "1") {
        queue.push([x1, y1]);
      }
    }
  }
}

function inBound(grid, x, y) {
  return x >= 0 && x < grid.length &&
    y >= 0 && y < grid[0].length;
}


let graph = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];
console.log(graph);
console.log(numIslands(graph));
console.log(graph);
