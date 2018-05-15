/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} positions
 * @return {number[]}
 */
var numIslands2 = function(m, n, positions) {
    const result = [];
  if (positions === undefined || positions.length === 0) {
    return result;
  }

  const id = new Array(m * n);
  id.fill(-1);

  let numComponent = 0;

  const directionX = [0, 0, 1, -1];
  const directionY = [1, -1, 0, 0];

  for (var i = 0; i < positions.length; i++) {
    let x = positions[i][0];
    let y = positions[i][1];

    let p = x * n + y;
    if (id[p] !== -1) {
      continue;
    }

    id[p] = p;
    numComponent++;

    for (var j = 0; j < 4; j++) {
      let nx = x + directionX[j];
      let ny = y + directionY[j];

      if (nx < 0 || nx >= m || ny < 0 || ny >= n) {
        continue;
      }

      let np = nx * n + ny;
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
};

function find(i, id) {
  while ( i !== id[i]) {
    id[i] = id[id[i]];
    i = id[i];
  }
  return i;
};
