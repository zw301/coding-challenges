// Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:
//
// Only one letter can be changed at a time.
// Each transformed word must exist in the word list. Note that beginWord is not a transformed word.
// Note:
//
// Return 0 if there is no such transformation sequence.
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
// Output: 5
//
// Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.
// Example 2:
//
// Input:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log"]
//
// Output: 0
//
// Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
  if (wordList === null) {
    return 0;
  }
  if (beginWord === endWord) {
    return 1;
  }

  const dic = new Set(wordList);

  const queue = [];
  queue.push(beginWord);

  let length = 1;
  while (queue.length !== 0) {
    length++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let word = queue.shift();
      let nextWords = getNextWords(word, dic);
      for (let j = 0; j < nextWords.length; j++) {
        let nextWord = nextWords[j];
        if (nextWord === endWord) {
          return length;
        }
        queue.push(nextWord);
      }
    }
  }
  return 0;
};

function getNextWords(word, dic) {
  const result = [];
  for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
    let char = String.fromCharCode(i);
    for (let j = 0; j < word.length; j++) {
      let nextWord = replace(word, j, char);
      if (nextWord === word) {
        continue;
      }
      if (dic.has(nextWord)) {
        result.push(nextWord);
        dic.delete(nextWord);
      }
    }
  }
  return result;
}

function replace(word, index, char) {
  let charArr = word.split("");
  charArr[index] = char;
  return charArr.join("");
}


///// leetcode 最优解法
var ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (wordList.size === 0 || !wordList.has(endWord)) {
    return 0
  }

  wordList.delete(endWord);

  let beginSet = new Set([beginWord]),
    endSet = new Set([endWord]),
    visited = new Set()

  let len = 1,
    strLen = beginWord.length

  while (beginSet.size > 0 && endSet.size > 0) {
    if (beginSet.size > endSet.size) {
      let tmp = beginSet
      beginSet = endSet
      endSet = tmp
    }

    let temp = new Set()
    for (let word of beginSet.keys()) {
      for (let i = 0; i < word.length; i++) {
        let former = i == 0 ? '' : word.slice(0, i)
        let after = word.slice(i + 1)

        for (let j = 0; j < 26; j++) {
          let letter = String.fromCharCode(97 + j)
          let newWord = former + letter + after

          if (endSet.has(newWord)) {
            return len + 1
          }

          if (!visited.has(newWord) && wordList.has(newWord)) {
            temp.add(newWord)
            visited.add(newWord)
          }
        }
      }
    }
    beginSet = temp
    len++
  }
  return 0
}
