// There are a total of n courses you have to take, labeled from 0 to n-1.
//
// Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
//
// Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?
//
// Example 1:
//
// Input: 2, [[1,0]]
// Output: true
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0. So it is possible.
// Example 2:
//
// Input: 2, [[1,0],[0,1]]
// Output: false
// Explanation: There are a total of 2 courses to take.
//              To take course 1 you should have finished course 0, and to take course 0 you should
//              also have finished course 1. So it is impossible.
// Note:
//
// The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
// You may assume that there are no duplicate edges in the input prerequisites.
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
  if (prerequisites === null || prerequisites.length === 0) {
    return true;
  }

  const adjacentList = new Map();
  const indegree = new Map();

  for (let i = 0; i < numCourses; i++) {
    adjacentList.set(i, []);
    indegree.set(i, 0);
  }

  prerequisites.forEach(prerequisit => {
    let courseNext = prerequisit[0];
    let coursePre = prerequisit[1];

    adjacentList.get(coursePre).push(courseNext);
    indegree.set(courseNext, indegree.get(courseNext) + 1);
  })


  const queue = [];

  for (let i = 0; i < numCourses; i++) {
    if (indegree.get(i) === 0) {
      queue.push(i);
    }
  }

  let count = 0;
  while (queue.length !== 0) {
    let course = queue.shift();
    count++;
    adjacentList.get(course).forEach(couseNext => {
      indegree.set(couseNext, indegree.get(couseNext) - 1);
      if (indegree.get(couseNext) === 0) {
        queue.push(couseNext);
      }
    });
  }
  return count === numCourses;
};


// var canFinish = function(numCourses, prerequisites) {
//
//   const adjacentList = {};
//   const indegree = {};
//
//   for (let i = 0; i < numCourses; i++) {
//     indegree[i] = 0;
//     adjacentList[i] = [];
//   }
//
//   prerequisites.forEach(prerequisit => {
//     let courseNext = prerequisit[0];
//     let coursePre = prerequisit[1];
//
//     adjacentList[coursePre].push(courseNext);
//
//     indegree[courseNext]++;
//   })
//
//   const queue = [];
//
//   for (let i = 0; i < numCourses; i++) {
//     if (indegree[i] === 0) {
//       queue.push(i);
//     }
//   }
//
//   let count = 0;
//   while (queue.length !== 0) {
//     let course = queue.shift();
//     count++;
//     adjacentList[course].forEach(couseNext => {
//       indegree[couseNext]--;
//       if (indegree[couseNext] === 0) {
//         queue.push(couseNext);
//       }
//     });
//   }
//   return count === numCourses;
// };

console.log(canFinish(2, [[1,0]]));
console.log(canFinish(2, [[1,0], [0, 1]]));
console.log(canFinish(3, [[1,0]]));
