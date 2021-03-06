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
 /**
  * @param {string} beginWord
  * @param {string} endWord
  * @param {string[]} wordList
  * @return {string[][]}
  */
 var findLadders = function(beginWord, endWord, wordList) {
     if (wordList === null || wordList.length === 0) {
         return [];
     }
     if (!wordList.includes(endWord)) {
         return [];
     }
     wordList.push(beginWord);

     const dict = new Set(wordList);
     const adj = new Map();
     const distance = new Map();

     bfs(distance, adj, endWord, beginWord, dict);

     const result = [];
     dfs(ladders, [], beginWord, endWord, distance, adj);

     return result;
 };

 const bfs = (distance, adj, start, end, dict) => {
     const queue = [];
     queue.push(start);
     distance.set(start, 0);

     dict.forEach(word => {
         adj.set(word, []);
     })

     while (queue.length !== 0) {
         let curr = queue.shift();
         let nextList = expand(curr, dict);
         nextList.forEach(nextWord => {
             adj.get(nextWord).push(curr); // 从我可以找到谁
             if (!distance.has(nextWord)) {
                 distance.set(nextWord, distance.get(curr) + 1);
                 queue.push(nextWord);
             }
         })
     }
 };

 const expand = (curr, dict) => {
     let nextList = [];
     for (let i = 0; i < curr.length; i++) {
         for (let charcode = "a".charCodeAt(0); charcode <= 'z'.charCodeAt(0); charcode++) {
             let nextWord = curr.substring(0, i) + String.fromCharCode(charcode) + curr.substring(i + 1);
             if (curr !== nextWord && dict.has(nextWord)) {
                 nextList.push(nextWord);
             }
         }
     }
     return nextList;
 };

 const dfs = (ladders, path, curr, end, distance, adj) => {
     path.push(curr);
     if (curr === end) {
         ladders.push(path.slice());
     }

     let nextList = adj.get(curr);
     nextList.forEach(nextWord => {
         if (distance.has(nextWord) && distance.get(nextWord) === distance.get(curr) - 1) {
             dfs(ladders, path, nextWord, end, distance, adj);
         }
     })
     path.pop();
 };


///////8.30
var findLadders = function(beginWord, endWord, wordList) {
    const dict = new Set(wordList);
    if (!dict.has(endWord)) {
        return [];
    }
    dict.add(beginWord)

    const distance = new Map();
    const adj = new Map();

    bfs(endWord, beginWord, dict, distance, adj);

    const result = [];

    dfs(beginWord, endWord, distance, adj, result, []);
    return result;

};

const dfs = function(curr, end, distance, adj, result, path) {
    path.push(curr);
    if (curr === end) {
        result.push(path.slice());
    }

    let nextList = adj.get(curr);
    for (let i = 0; i < nextList.length; i++) {
        let nextWord = nextList[i];
        if (distance.has(nextWord) && distance.get(nextWord) === distance.get(curr) - 1) {
            dfs(nextWord, end, distance, adj, result, path);
        }
    }
    path.pop();
}

const bfs = function(beginWord, endWord, dict, distance, adj) {
    const queue = [];
    queue.push(beginWord);
    distance.set(beginWord, 0);

    dict.forEach(word => {
        adj.set(word, []);
    })

    while (queue.length !== 0) {
        let curr = queue.shift();
        let nextList = expand(curr, dict);
        for (let j = 0; j < nextList.length; j++) {
            let nextWord = nextList[j];
            adj.get(nextWord).push(curr);
            if (!distance.has(nextWord)) {
                distance.set(nextWord, distance.get(curr) + 1);
                queue.push(nextWord);
            }
        }
    }
}

const expand = function(word, dict) {
    const expandList = [];

    for (let i = 0; i < word.length; i++) {
        for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
            let nextWord = word.slice(0, i) + String.fromCharCode(charCode) + word.slice(i + 1);
            if (word === nextWord) {
                continue;
            }
            if (dict.has(nextWord)) {
                expandList.push(nextWord);
            }
        }
    }
    return expandList;
}

let start = "hit";
let end = "cog";
let dict = ["hot","dot","dog","lot","log","cog"];

console.log(findLadders(start, end, dict))
