// Design a data structure that supports the following two operations:
//
// void addWord(word)
// bool search(word)
// search(word) can search a literal word or a regular expression string containing only letters a-z or .. A . means it can represent any one letter.
//
// Example:
//
// addWord("bad")
// addWord("dad")
// addWord("mad")
// search("pad") -> false
// search("bad") -> true
// search(".ad") -> true
// search("b..") -> true
// Note:
// You may assume that all words are consist of lowercase letters a-z.
/**
 * Initialize your data structure here.
 */
class TrieNode {
  constructor() {
    this.link = new Array(26).fill(null);
    this.isEnd = false;
  }
}
var WordDictionary = function() {
  this.root = new TrieNode();
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    let charcode = word.charCodeAt(i) - "a".charCodeAt(0);
    if (curr.link[charcode] === null) {
      curr.link[charcode] = new TrieNode();
    }
    curr = curr.link[charcode];
  }
  curr.isEnd = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  let curr = this.root;
  const find = function(word, curr, pos) {
    if (pos === word.length) {
      return curr.isEnd;
    }

    let char = word[pos];
    let charcode = char.charCodeAt(0) - "a".charCodeAt(0);
    if (char === ".") {
      for (let i = 0; i < 26; i++) {
        if (curr.link[i] !== null) {
          if (find(word, curr.link[i], pos + 1)) {
            return true;
          }
        }
      }
      return false;
    } else if (curr.link[charcode] !== null) {
      return find(word, curr.link[charcode], pos + 1);
    } else {
      return false;
    }
  };

  return find(word, curr, 0);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
