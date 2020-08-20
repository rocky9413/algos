function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
// find minimum depth
const minDepth = function (root) {
  if (!root) return 0;
  if (!root.left) return minDepth(root.right) + 1;
  if (!root.right) return minDepth(root.left) + 1;
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};
// find maximum depth
const maxDepth = function (root) {
  return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;
};
// height-balanced subtrees height differ no more than 1
const heightBalanced = function (root) {
  if (!root) return true;
  return (
    heightBalanced(root.left) &&
    heightBalanced(root.right) &&
    Math.abs(maxDepth(root.left) - maxDepth(root.right)) < 2
  );
};
