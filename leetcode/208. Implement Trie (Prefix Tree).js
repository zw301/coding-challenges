// Implement a trie with insert, search, and startsWith methods.
//
// Example:
//
// Trie trie = new Trie();
//
// trie.insert("apple");
// trie.search("apple");   // returns true
// trie.search("app");     // returns false
// trie.startsWith("app"); // returns true
// trie.insert("app");
// trie.search("app");     // returns true
// Note:
//
// You may assume that all inputs are consist of lowercase letters a-z.
// All inputs are guaranteed to be non-empty strings.
/**
 * Initialize your data structure here.
 */

const TrieNode = function () {
  this.link = new Array(26).fill(null);
  this.isEnd = false;
}
/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let charcode = char.charCodeAt(0) - "a".charCodeAt(0);
    if (curr.link[charcode] === null) {
      curr.link[charcode] = new TrieNode();
    }
    curr = curr.link[charcode];
  }
  curr.isEnd = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let charcode = char.charCodeAt(0) - "a".charCodeAt(0);
    if (curr.link[charcode] === null) {
      return false;
    } else {
      curr = curr.link[charcode];
    }
  }
  return this.isEnd;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let curr = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    let charcode = char.charCodeAt(0) - "a".charCodeAt(0);
    if (curr.link[charcode] === null) {
      return false;
    } else {
      curr = curr.link[charcode];
    }
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
