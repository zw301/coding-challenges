// 605. Sequence Reconstruction
// Check whether the original sequence org can be uniquely reconstructed from the sequences in seqs. The org sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 10^4. Reconstruction means building a shortest common supersequence of the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are subsequences of it). Determine whether there is only one sequence that can be reconstructed from seqs and it is the org sequence.
//
// Example
// Given org = [1,2,3], seqs = [[1,2],[1,3]]
// Return false
// Explanation:
// [1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.
//
// Given org = [1,2,3], seqs = [[1,2]]
// Return false
// Explanation:
// The reconstructed sequence can only be [1,2].
//
// Given org = [1,2,3], seqs = [[1,2],[1,3],[2,3]]
// Return true
// Explanation:
// The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].
//
// Given org = [4,1,5,2,6,3], seqs = [[5,2,6,3],[4,1,5,2]]
// Return true
const sequenceReconstruction = function (org, seqs) {
  const map = new Map();
  const indegree = new Map();

  org.forEach(s => {
    map.set(s, new Set());
    indegree.set(s, 0);
  });

  const n = org.length;
  let count = 0;

  for (let i = 0; i < seqs.length; i++) {
    let seq = seqs[i];
    count += seq.length;
    if (seq.length >= 1 && (seq[0] <= 0 || seq[0] > n)) {
      return false;
    }
    for (let i = 1; i < seq.length; i++) {
      console.log(seq[i], n)
      if (seq[i] <= 0 || seq[i] > n) {
        return false;
      }
      if (map.get(seq[i - 1]) && !map.get(seq[i - 1]).has(seq[i])) {
        map.get(seq[i - 1]).add(seq[i]);
        indegree.set(seq[i], indegree.get(seq[i]) + 1);
      }
    }
  }
  console.log({indegree, map});

  // case: [1], []
  if (count < n) {
    return false;
  }

  const queue = [];
  // for ( let [key, value] of indegree) {
  //
  // }
  // indegree.forEach((value, key) => {
  //   if (indegree.get(key) === 0) {
  //     queue.push(key);
  //   }
  // });

  for (let key of indegree.keys()) {
    if (indegree.get(key) === 0) {
      queue.push(key);
    }
  }

  let cnt = 0;
  while (queue.length === 1) {
    let el = queue.shift();
    map.get(el).forEach(next => {
      indegree.set(next, indegree.get(next) - 1);
      if (indegree.get(next) === 0) {
        queue.push(next);
      }
    })
    if (el !== org[cnt]) {
      return false;
    }
    cnt++;
    // console.log(queue);
  }

  // console.log(cnt);
  return cnt === org.length;
}

// console.log(sequenceReconstruction([4,1,5,2,6,3], [[5,2,6,3],[4,1,5,2]]));
console.log(sequenceReconstruction([5,3,2,4,1], [[5,3,2,4],[4,1],[1],[3],[2,4],[1,1000000000]]));
