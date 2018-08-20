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


// Union-Find
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

  getComponent() {
    return this.numComponent;
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

// BFS
// If a graph is a valid tree, it satisfies:
// 1, If and Only if the number of edges equals n - 1
// 2, All n vertices are connected
// We can use BFS to traverse the graph and store all reached vertices to a HashSet
// After traversing, we check if the size of HashSet is n

var validTree = function(n, edges) {
  if (n === 0) {
    return false;
  }
  if (n - 1 !== edges.length) {
    return false;
  }

  const adj = new Array(n);
  for (let i = 0; i < n; i++) {
    adj[i] = new Array();
  }

  for (let i = 0; i < edges.length; i++) {
    let v1 = edges[i][0];
    let v2 = edges[i][1];
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  const queue = [];
  const set = new Set();

  queue.push(0);
  set.add(0);

  while (queue.length !== 0) {
    let node = queue.shift();
    for (let i = 0; i < adj[node].length; i++) {
      if (set.has(adj[node][i])) {
        continue;
      }
      queue.push(adj[node][i]);
      set.add(adj[node][i]);
    }
  }

  return set.size === n;
};

const n1 = 5;
const edges1 = [[0, 1], [0, 2], [0, 3], [1, 4]];
console.log(isValidTree(n1, edges1));

const n2 = 5;
const edges2 = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]];
console.log(isValidTree(n2, edges2));
