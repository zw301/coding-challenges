// Description
// Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.
//
// You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
//
// Have you met this question in a real interview?
// Example
// Given n = 5 and edges = [[0, 1], [0, 2], [0, 3], [1, 4]], return true.
//
// Given n = 5 and edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]], return false.

// class UF {
//   constructor(n){
//     this.id = new Array(n);
//     this.numComponent = n;
//
//     for (var i = 0; i < n; i++) {
//       this.id[i] = i;
//     }
//   }
//
//   find(i) {
//     while (i !== this.id[i]) {
//       this.id[i] = this.id[this.id[i]];
//       i = this.id[i];
//     }
//     return i;
//   }
//
//   union(p, q) {
//     let i = this.find(p);
//     let j = this.find(q);
//
//     if (i !== j) {
//       this.numComponent--;
//     }
//     this.id[i] = j;
//   }
//   getComponent() {
//     return this.numComponent;
//   }
// }


class UF {
  constructor(n) {
    this.id = new Array(n);
    this.numComponent = n;

    for (var i = 0; i < n; i++) {
      this.id[i] = i;
    }
  }

  find(i) {
    while (i !== this.id[i]) {
      this.id[i] = this.id[id[i]];
      i = this.id[i];
    }
    return i;
  }
}

function isValidTree(n, edges) {
  if (edges.length !== n - 1) {
    return false;
  }

  const uf = new UF(n);
  for (var i = 0; i < edges.length; i++) {
    uf.union(edges[i][0], edges[i][1]);
  }

  return uf.getComponent() === 1;

}

const n1 = 5;
const edges1 = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(isValidTree(n1, edges1));

const n2 = 5;
const edges2 = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
console.log(isValidTree(n2, edges2));
