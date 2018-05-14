// Description
// Given n nodes in a graph labeled from 1 to n. There is no edges in the graph at beginning.
//
// You need to support the following method:
//
// connect(a, b), an edge to connect node a and node b
// query(), Returns the number of connected component in the graph
//
//
// Example
// 5 // n = 5
// query() return 5
// connect(1, 2)
// query() return 4
// connect(2, 4)
// query() return 3
// connect(1, 4)
// query() return 3


class ConnectingGraph3 {
  constructor(n) {
    this.father = new Array(n + 1);
    this.size = [];
    this.numComponent = n;

    for (var i = 1; i <= this.numComponent; ++i) {
      debugger
      this.father[i] = i;
      this.size[i] = i;
    }
  }

  root(i) {
    while (i !== this.father[i]) {
      this.father[i] = this.father[this.father[i]];
      i = this.father[i];
    }
    return i;
  }

  find(p) {
    if(this.father[p] == p) {
      return p;
    }
    return father[p] = find(father[p])
  }

  union(p, q) {
    let root_p = this.root(p);
    let root_q = this.root(q);

    if(root_p !== root_q) {
      this.father[root_p] = root_q;
      this.size[root_p] += this.size[root_q];
      this.numComponent--;
    }
  }

  query() {
    return this.numComponent;
  }
}

let c = new ConnectingGraph3(5);
// console.log(c.father)
console.log(c.query());
c.union(1, 2)
console.log(c.father);
console.log(c.query());
c.union(2, 4)
console.log(c.father);
console.log(c.query());
c.union(1, 4)
console.log(c.father);
console.log(c.query());
