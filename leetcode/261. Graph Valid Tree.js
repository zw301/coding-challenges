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

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 use union find
 [1, 2], [2, 3], [1, 3]
 1 has root 2, 2 has root 3,(1's root is 3 as well) 1 has root 3, if edge[1] === root already, return false, it is a graph
 */
var validTree = function(n, edges) {
    if(edges.length !== n - 1) return false;
    var roots = [];
    for(var i = 0; i < n; i++) {
        roots[i] = i;
    }

    for(var edge of edges) {
        var superRoot0 = findRoot(edge[0], roots);
        var superRoot1 = findRoot(edge[1], roots);

        if(superRoot0 === superRoot1) {
            return false;
        }
        roots[superRoot0] = superRoot1;
    }
    return true;
};

var findRoot = function(val, roots) {
    if(val === roots[val]) {
        return val;
    }
     return findRoot(roots[val], roots);
}



// BFS
var validTree = function(n, edges) {
    if (n === 0) {
        return false;
    }

    if (edges.length !== n - 1) {
        return false;
    }

    // build adjacent map
    const map = {};

    edges.forEach(edge => {
        let node0 = edge[0];
        let node1 = edge[1];

        if (map[node0] && !map[node0].includes(node1)) {
            map[node0].push(node1);
        } else {
            map[node0] = [node1];
        }

        if (map[node1] && !map[node1].includes(node0)) {
            map[node1].push(node0);
        } else {
            map[node1] = [node0];
        }
    });


    // bfs
    const q = [];
    const set = new Set();

    q.push(0);
    set.add(0);

    while ( q.length !== 0) {
        let node = q.shift();

        if (map[node] !== undefined) {
                for(let i = 0; i < map[node].length; i++) {
                if (set.has(map[node][i])) {
                    continue;
                }
                q.push(map[node][i]);
                set.add(map[node][i]);
            }
        }
    }
    return set.size === n;
};

// BFS II
var validTree = function(n, edges) {
    if (n === 0) {
        return false;
    }

    if (edges.length !== n - 1) {
        return false;
    }

    // build adjacent map
    const map = {};

    edges.forEach(edge => {
        let node0 = edge[0];
        let node1 = edge[1];

        if (map[node0] && !map[node0].has(node1)) {
            map[node0].add(node1);
        } else {
            map[node0] = new Set();
            map[node0].add(node1);

        }

        if (map[node1] && !map[node1].has(node0)) {
            map[node1].add(node0);
        } else {
          map[node1] = new Set();
          map[node1].add(node0);
        }
    });


    // bfs
    const q = [];
    const set = new Set();

    q.push(0);
    set.add(0);

    while ( q.length !== 0) {
        let node = q.shift();

        if (map[node] !== undefined) {
                map[node].forEach(node => {
                  if (!set.has(node)) {
                    q.push(node);
                    set.add(node);
                  }
                });
        }
    }
    return set.size === n;
};

const edges1 = [[0,1], [0,2], [0,3], [1,4]];
const edges2 = [[0,1], [1,2], [2,3], [1,3], [1,4]];

console.log(validTree(5, edges1));
console.log(validTree(5, edges2));
console.log(validTree(1, []));
