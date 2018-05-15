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

function numOfIsland(graph) {
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


const graph =
  [
    [1, 1, 0, 0, 0],
    [0, 1, 0, 0, 1],
    [0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1]
  ];
console.log(numOfIsland(graph));
