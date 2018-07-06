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
