// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
//
// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.
//
// The encoded string should be as compact as possible.
//
// Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (root === null) {
    return "";
  }

  const queue = [];
  queue.push(root);

  let result = "";
  while (queue.length !== 0) {
    let node = queue.shift();
    if (node === null) {
      result += "#,";
      continue;
    }
    result += String(node.val) + ",";
    queue.push(node.left);
    queue.push(node.right);
  }
  return result.slice(0, result.length - 1);
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data === "") {
    return null;
  }

  const arr = data.split(",");
  const root = new TreeNode(Number(arr[0]));
  const queue = [];
  queue.push(root);

  for (let i = 1; i < arr.length; i++) {
    let node = queue.shift();
    if (arr[i] !== "#") {
      let left = new TreeNode(Number(arr[i]));
      node.left = left;
      queue.push(left);
    }
    i++;
    if (arr[i] !== "#") {
      let right = new TreeNode(Number(arr[i]));
      node.right = right;
      queue.push(right);
    }
  }
  return root;
};
