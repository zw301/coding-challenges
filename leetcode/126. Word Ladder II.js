// 126. Word Ladder II
// Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:
//
// Only one letter can be changed at a time
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:
//
// Return an empty list if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non-empty and are not the same.
// Example 1:
//
// Input:
// beginWord = "hit",
// endWord = "cog",
// wordList = ["hot","dot","dog","lot","log","cog"]
//
// Output:
// [
//   ["hit","hot","dot","dog","cog"],
//   ["hit","hot","lot","log","cog"]
// ]
// Example 2:
//
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: []
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  const ladders = [];
  const map = new Map();
  const distance = new Map();

  if (!wordList.includes(endWord)) {
    return [];
  }
  wordList.push(beginWord);
  let dict = new Set(wordList);
  bfs(map, distance, endWord, beginWord, dict);

  path = [];
  dfs(ladders, path, beginWord, endWord, distance, map);

  return ladders;
};

const bfs = (map, distance, start, end, dict) => {
  const queue = [];
  queue.push(start);
  distance.set(start, 0);
  // for (let i = 0; i < dict.length; i++) {
  //   let s = dict[i];
  //   console.log(s);
  //   map.set(s, new Array());
  // }

  dict.forEach(s => {
    map.set(s, []);
  })

  while (queue.length !== 0) {
    let crt = queue.shift();
    let nextList = expand(crt, dict);
    for (let i = 0; i < nextList.length; i++) {
      let next = nextList[i];
      // console.log(next);
      // console.log(map.get(next));
      map.get(next).push(crt);
      if (!distance.has(next)) {
        distance.set(next, distance.get(crt) + 1);
        queue.push(next);
      }
    }
  }
}

const expand = (crt, dict) => {
  let expansion = [];
  for (let i = 0; i < crt.length; i++) {
    for (let charcode = "a".charCodeAt(0); charcode <= "z".charCodeAt(0); charcode++) {
      let expanded = crt.substring(0, i) + String.fromCharCode(charcode) + crt.substring(i + 1);
      if (dict.has(expanded)) {
        expansion.push(expanded);
      }
    }
  }
  return expansion;
}

const dfs = (ladders, path, crt, end, distance, map) => {
  path.push(crt);
  if (crt === end) {
    ladders.push(path.slice());
  } else {
    let nextList = map.get(crt);
    for (let i = 0; i < nextList.length; i++) {
      let next = nextList[i];
      if (distance.has(next) && distance.get(crt) === distance.get(next) + 1) {
        dfs(ladders, path, next, end, distance, map);
      }
    }
  }

  path.pop();
}

let start = "hit";
let end = "cog";
let dict = ["hot","dot","dog","lot","log","cog"];

console.log(findLadders(start, end, dict))
