//
// Find the sum of all left leaves in a given binary tree.
//
// Example:
//
//     3
//    / \
//   9  20
//     /  \
//    15   7
//
// There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if (root === null) {
        return 0;
    }

    const queue = [];
    queue.push(root);

    const valid = [];
    valid.push(false);

    let sum = 0;
    while (queue.length !== 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            let boolean = valid.shift();
            if (boolean && node.left === null && node.right === null) {
                sum += node.val;
            }
            if (node.left) {
                queue.push(node.left);
                valid.push(true);
            }
            if (node.right) {
                queue.push(node.right);
                valid.push(false);
            }
        }
    }
    return sum;
};

// Iterative
// We use pre-order traversal
// At any node, if we want to push its left child to the stack, we check if this left child's left child is a left leaf.
// if it is, we add its value
// We push a right child into ths stack only if this right child has child.(There might be left leaf in this substree)
var sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0;
  }

  let sum = 0;

  const stack = [];
  stack.push(root);
  while (stack.length !== 0) {
    let node = stack.pop();
    if (node.left) {
      if (node.left.left === null && node.left.right === null) {
        sum += node.left.val;
      } else {
        stack.push(node.left);
      }
    }
    if (node.right !== null) {
      if (node.right.left !== null || node.right.right !== null) {
        stack.push(node.right);
      }
    }
  }
  return sum;
};

// Recursive
// From root, we sum up all its left subtree's left leaves.
// Then we add its right subtree's left leaves.
var sumOfLeftLeaves = function(root) {
  if (root === null) {
    return 0;
  }

  let sum = 0;
  if (root.left !== null) {
    if (root.left.left === null && root.left.right === null) {
      sum += root.left.val;
    } else {
      sum += sumOfLeftLeaves(root.left);
    }
  }
  sum += sumOfLeftLeaves(root.right);
  return sum;
};
