// Given n nodes labeled from 0 to n - 1 and a list of undirected edges
// (each edge is a pair of nodes),
// write a function to find the number of connected components in an undirected graph.
//
// Example 1:
//      0          3
//      |          |
//      1 --- 2    4
// Given n = 5 and edges = [[0, 1], [1, 2], [3, 4]], return 2.
//
// Example 2:
//      0           4
//      |           |
//      1 --- 2 --- 3
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]], return 1.
//
// Note:
// You can assume that no duplicate edges will appear in edges.
// Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

class UF {
  constructor(n) {
    this.id = new Array(n);
    for (let i = 0; i < n; i++) {
      this.id[i] = i;
    }
    this.numComponent = n;
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
var countComponents = function(n, edges) {
  const uf = new UF(n);

  for (var i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1])
  }

  return uf.getNumComponent();
};

// DFS
var countComponents = function(n, edges) {
    if (n <= 1) {
        return n;
    }

    const adj = new Array();
    for (let i = 0; i < n; i++) {
        adj[i] = new Array();
    }

    for (let i = 0; i < edges.length; i++) {
        let v1 = edges[i][0];
        let v2 = edges[i][1];

        adj[v1].push(v2);
        adj[v2].push(v1);
    }

    const visited = new Array(n).fill(false);
    let count = 0;

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            count++;
            dfs(visited, i, adj);
        }
    }
    return count;
};

const dfs = function(visited, index, adj) {
    visited[index] = true;

    let neighbors = adj[index];
    for (let i = 0; i < neighbors.length; i++) {
        let next = neighbors[i];
        if (!visited[next]) {
            dfs(visited, next, adj);
        }
    }
}

const edges = [[0, 1], [1, 2], [2, 3], [3, 4]];
console.log(countComponents(5, edges));
