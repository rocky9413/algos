/* You are given a tree. Write a function to check if it is a valid binary search tree. A tree is
 * a valid binary search tree if it satisfies the following constraints:
 *      at any given node, the value of all the nodes in its left tree must be < its value
 *      at any given node, the value of all the nodes in its right tree must be > its value
 * Assume that each value in the tree is unique.
 */

function BinaryTree(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

function validBST(tree, min = null, max = null) {
  // compare tree.left to max which is tree.value
  if (max !== null && tree.value > max) {
    // console.log('right');
    return false;
  }
  // compare tree.right to min which is tree.value
  if (min !== null && tree.value < min) {
    // console.log('left');
    return false;
  }

  if (tree.left) {
    if (validBST(tree.left, min, tree.value) === false) return false;
  }

  if (tree.right) {
    if (validBST(tree.right, tree.value, max) === false) return false;
  }

  return true;
}

// Naive 'one-liner' way that doesn't work - do you know why this doesn't work?
// function validBST(tree) {
//   return (
//     tree !== null &&
//     (tree.left ? tree.left.value <= tree.value && validBST(tree.left) : true) &&
//     (tree.right ? tree.right.value > tree.value && validBST(tree.right) : true)
//   );
// }

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

console.log(validBST(four));

module.exports = { BinaryTree: BinaryTree, validBST: validBST };
