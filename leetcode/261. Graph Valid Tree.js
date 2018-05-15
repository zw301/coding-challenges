// Given n nodes labeled from 0 to n-1 and a list of undirected edges
// (each edge is a pair of nodes),
// write a function to check whether these edges make up a valid tree.
//
// Example 1:
//
// Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
// Output: true
// Example 2:
//
// Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
// Output: false
// Note: you can assume that no duplicate edges will appear in edges.
// Since all edges are undirected, [0,1] is the same as [1,0] and
// thus will not appear together in edges.

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */

class UF {
  constructor(n) {
    this.id = new Array(n);

    for (var i = 0; i < n; i++) {
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
    const i = this.find(p);
    const j = this.find(q);

    if (i !== j) {
      this.numComponent--;
    }
    this.id[i] = j;
  }

  getNumComponent() {
    return this.numComponent;
  }
}

var validTree = function(n, edges) {

  if (edges.length !== n - 1) {
    return false;
  }

  const uf = new UF(n);

  for (var i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.getNumComponent() === 1;
};

const edges1 = [[0,1], [0,2], [0,3], [1,4]];
const edges2 = [[0,1], [1,2], [2,3], [1,3], [1,4]];

console.log(validTree(5, edges1));
console.log(validTree(5, edges2));
console.log(validTree(1, []));
