/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function superbalanced(tree) {
  if (tree.value === null) return true;
  if (typeof tree === 'undefined') return undefined;
  return maxDepth(tree) - minDepth(tree) <= 1;
}

// Determines the minimum depth of a binary tree node.
function minDepth(tree) {
  if (tree === null) return 0;
  return 1 + Math.min(minDepth(tree.left), minDepth(tree.right));
}

// Determines the maximum depth of a binary tree node.
function maxDepth(tree) {
  if (tree === null) return 0;
  return 1 + Math.max(maxDepth(tree.left), maxDepth(tree.right));
}

let one = new BinaryTree(1);
let two = new BinaryTree(2);
let three = new BinaryTree(3);
let four = new BinaryTree(4);
let five = new BinaryTree(5);
let six = new BinaryTree(6);
let seven = new BinaryTree(7);

four.left = two;
four.right = six;
two.left = one;
two.right = three;
six.left = five;
six.right = seven;

// console.log(four);
console.log(superbalanced(four));

// function superbalanced(tree) {
//   if (tree === null) return true;
//   return Math.abs(height(tree.left) - height(tree.right)) <= 1 && superbalanced(tree.left) && superbalanced(tree.right);
// }

// function height(tree) {
//   if (tree === null) return 0;
//   return 1 + Math.max(height(tree.left), height(tree.right));
// }

module.exports = { BinaryTree: BinaryTree, superbalanced: superbalanced };
