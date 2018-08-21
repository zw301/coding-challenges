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

// 有且仅有一个拓扑排序。
// 这道题给了我们一个序列org，又给我们了一些子序列seqs，问这些子序列能否唯一的重建出原序列。
// 能唯一重建的意思就是任意两个数字的顺序必须是一致的，不能说在一个子序列中1在4的后面，
// 但是在另一个子序列中1在4的前面，这样就不是唯一的了。还有一点就是，子序列seqs中不能出现其他的数字，
// 就是说必须都是原序列中的数字。那么我们可以用了一个一维数组pos来记录org中每个数字对应的位置，
// 然后用一个flags数字来标记当前数字和其前面一个数字是否和org中的顺序一致，
// 用cnt来标记还需要验证顺序的数字的个数，初始化cnt为n-1，因为n个数字只需要验证n-1对顺序即可，
// 然后我们先遍历一遍org，将每个数字的位置信息存入pos中，然后再遍历子序列中的每一个数字，
// 还是要先判断数字是否越界，然后我们取出当前数字cur，和其前一位置上的数字pre，如果在org中，
// pre在cur之后，那么直接返回false。否则我们看如果cur的顺序没被验证过，而且pre是在cur的前一个，
// 那么标记cur已验证，且cnt自减1，最后如果cnt为0了，说明所有顺序被成功验证了
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
    for (let j = 1; j < seq.length; j++) {
      // console.log(seq[i], n)
      if (seq[j] <= 0 || seq[j] > n) {
        return false;
      }

      // 虽然set可以不重复添加，但是如果有重复的seq例如[[1,2],[1,2]]，其中2的入度不会被设置为2
      if (map.get(seq[j - 1]) && !map.get(seq[j - 1]).has(seq[j])) {
        map.get(seq[j - 1]).add(seq[j]);
        indegree.set(seq[j], indegree.get(seq[j]) + 1);
      }
    }
  }
  // console.log({indegree, map});

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
