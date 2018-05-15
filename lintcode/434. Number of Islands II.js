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
// Given n = 3, m = 3, array of pair A = [[0,0],[0,1],[2,2],[2,1]].
//
// return [1,1,2,2]


function numOfIsland(n, m, operators) {
  const result = [];
  if (operators === undefined || operators.length === 0) {
    return result;
  }

  const id = new Array(n * m);
  id.fill(-1);

  let numComponent = 0;

  const directionX = [0, 0, 1, -1];
  const directionY = [1, -1, 0, 0];

  for (var i = 0; i < operators.length; i++) {
    let x = operators[i][0];
    let y = operators[i][1];

    let p = x * m + y;
    if (id[p] !== -1) {
      continue;
    }

    id[p] = p;
    numComponent++;

    for (var j = 0; j < 4; j++) {
      let nx = x + directionX[j];
      let ny = y + directionY[j];

      if (nx < 0 || nx >= n || ny < 0 || ny >= m) {
        continue;
      }

      let np = nx * m + ny;
      if (id[np] === -1) {
        continue;
      }

      if (find(np, id) !== find(p, id)) {
        id[find(np, id)] = find(p, id);
        numComponent--;
      }
    }
    result.push(numComponent);
  }
  return result;
}

function find(i, id) {
  while ( i !== id[i]) {
    id[i] = id[id[i]];
    i = id[i];
  }
  return i;
}

const operators = [[0,0],[0,1],[2,2],[2,1]];
console.log(numOfIsland(3, 3, operators))
