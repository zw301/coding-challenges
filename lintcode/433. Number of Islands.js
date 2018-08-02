// Description
// Given a boolean 2D matrix, 0 is represented as the sea, 1 is represented as the island.
// If two 1 is adjacent, we consider them in the same island.
// We only consider up/down/left/right adjacent.
//
// Find the number of islands.
//

// Example
// Given graph:
//
// [
//   [1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1],
//   [0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 1]
// ]


// 过不了
var numIslands = function(grid) {
    if (grid === null || grid.length === 0) {
        return 0;
    }
    if (grid[0] === null || grid[0].length === 0) {
        return 0;
    }

    const uf = new UF(grid);
    const n = grid.length;
    const m = grid[0].length;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m ; j++) {
            if (grid[i][j] === "0") {
                continue;
            }
            let p = i * m + j;

            //connect  right
            if (j + 1 < m && grid[i][j + 1] === "1") {
                let q = p + 1;
                uf.union(p, q);
            }

            //connect down
            if (i + 1 < n && grid[i + 1][j] === "1") {
                let q = p + m;
                uf.union(p, q);
            }
        }
    }
    return uf.getNumComponent();
};

class UF {
    constructor(graph) {
        this.component = 0;

        const n = graph.length;
        const m = graph[0].length;

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                this.component++;
            }
        }

        this.id = new Array(n * m);
        for (let i = 0; i < this.id.length; i++) {
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

        if (i !== j) {
            this.component--;
        }
        this.id[i] = j;
    }

    getNumComponent() {
        return this.component;
    }
}


// union find
class UF {
  constructor(graph) {
    this.numComponent = 0;

    const n = graph.length;
    const m = graph[0].length;

    for (var i = 0; i < n; i++) {
      for (var j = 0; j < m; j++) {
        if ( graph[i][j] === 1) {
          this.numComponent++;
        }
      }
    }

    this.id = new Array(n * m);
    for (var i = 0; i < this.id.length; i++) {
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

    if (i !== j) {
      this.numComponent--;
    }
    this.id[i] = j;
  }

  getNumComponent() {
    return this.numComponent;
  }
}

function numOfIsland1(graph) {
  if (graph.length === 0 || graph[0].length === 0) {
    return 0;
  }

  const n = graph.length;
  const m = graph[0].length;

  const uf = new UF(graph);

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < m; j++) {
      if(graph[i][j] === 0) {
        continue;
      }

      let p = i * m + j;

      // connect right
      if (j + 1 < m && graph[i][j + 1] === 1) {
        let q = p + 1;
        uf.union(p, q);
      }

      // connect down
      if ( i + 1 < n && graph[i + 1][j] === 1) {
        let q = p + m;
        uf.union(p, q);
      }
    }
  }
  return uf.getNumComponent();
}

// bfs
var numIslands = function(grid) {
  if (grid === null || grid.length === 0) {
    return 0;
  }
  if (grid[0] === null || grid[0].length === 0) {
    return 0;
  }

  let m = grid.length;
  let n = grid[0].length;

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j]) {
        bfs(grid, i, j);
        count++;
      }
    }
  }
  return count;
}

const bfs = function(grid, x, y) {
  const goX = [1, -1, 0, 0];
  const goY = [0, 0, 1, -1];

  const queue = [];
  const pt = new Point(x, y);
  queue.push(pt);
  grid[x][y] = false;

  while (queue.length !== 0) {
    let cur = queue.shift();
    grid[cur.x][cur.y] = false;

    for (let i = 0; i < 4; i++) {
      let adj = new Point(cur.x + goX[i], cur.y + goY[i]);
      if (inBound(grid, adj) && grid[adj.x][adj.y]) {
        queue.push(adj);
      }
    }
  }
}

const inBound = function(grid, point) {
  let n = grid.length;
  let m = grid[0].length;

  return point.x >= 0 && point.x < n && point.y >= 0 && point.y < m;
}

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const graph =
  [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ];
console.log(numIslands(graph));
