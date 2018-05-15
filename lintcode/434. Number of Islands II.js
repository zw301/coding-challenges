// Description
// Given a n,m which means the row and column of the 2D matrix and an array of pair A( size k).
// Originally, the 2D matrix is all 0 which means there is only sea in the matrix.
// The list pair has k operator and each operator has two integer
// A[i].x, A[i].y means that you can change the grid matrix[A[i].x][A[i].y] from sea to island.
// Return how many island are there in the matrix after each operator.
//
// 0 is represented as the sea, 1 is represented as the island. If two 1 is adjacent, we consider them in the same island. We only consider up/down/left/right adjacent.
//
// Example
// Given n = 3, m = 3, array of pair A = [(0,0),(0,1),(2,2),(2,1)].
//
// return [1,1,2,2]

class UF {
  constructor(n, m) {
    this.numComponent = 0;

    this.id = new Array(n * m);
    for (var i = 0; i < n * m; i++) {
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

function numOfIsland(n, m, arr) {
  for (var i = 0; i < arr.length; i++) {
    let p = arr[i][0] * m + arr[i][1];

  }
}
