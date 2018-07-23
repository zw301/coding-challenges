// Given a 2D board and a list of words from the dictionary, find all words in the board.
//
// Each word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.
//
// Example:
//
// Input:
// words = ["oath","pea","eat","rain"] and board =
// [
//   ['o','a','a','n'],
//   ['e','t','a','e'],
//   ['i','h','k','r'],
//   ['i','f','l','v']
// ]
//
// Output: ["eat","oath"]
// Note:
// You may assume that all inputs are consist of lowercase letters a-z.
class Trie {
  constructor() {
    this.link = new Array(26).fill(null);
    this.word = null;
  }
}
var findWords = function(board, words) {
  if (board === null || board.length === 0 || board[0] === null || board[0].length === 0) {
    return [];
  }
  if (words === null || words.length === 0) {
    return [];
  }

  const root = buildTrie(words);
  const result = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      dfs(board, root, i, j, result);
    }
  }
  return result;
};

const dfs = (board, curr, i, j, result) => {
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
    return;
  }

  let char = board[i][j];
  let index = char.charCodeAt(0) - "a".charCodeAt(0);
  if (char === "#" || curr.link[index] === null) {
    return;
  }
  curr = curr.link[index];
  if (curr.word !== null) {
     result.push(curr.word);
     curr.word = null;
  }

  board[i][j] = "#";
  dfs(board, curr, i + 1, j, result);
  dfs(board, curr, i - 1, j, result);
  dfs(board, curr, i, j + 1, result);
  dfs(board, curr, i, j - 1, result);
  board[i][j] = char;
};

const buildTrie = (words) => {
  const root = new Trie();
  words.forEach(word => {
    let curr = root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      let index = char.charCodeAt(0) - "a".charCodeAt(0);
      if (curr.link[index] === null) {
        curr.link[index] = new Trie();
      }
      curr = curr.link[index];
    }
    curr.word = word;
  })
  return root;
};
