/**
 * Binary Tree - 1 root, at most 2 children
 * 1 path between root to any node
 * 
 *     1
 *    / \
 *   2   3
 *  / \
 * 4   5
 * In-order (Left, Root, Right) : 4 2 5 1 3 | [...root.left, root.val, ...root.right];
 * Pre-order (Root, Left, Right) : 1 2 4 5 3 | [root.val, ...root.left, ...root.right];
 * Post-order (Left, Right, Root) : 4 5 2 3 1 | [...root.left, ...root.right, root.val];
 * 
 * dfs : stack : 1 2 4 5 3 
 * bfs : queue : 1 2 3 4 5
 */

const depthFirstSearchByStack = (root) => {
  if (!root) return [];
  const result = [];
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    result.push(curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
}
const depthFirstSearchRecursive = (root) => {
  if (!root) return [];
  const left = depthFirstSearchRecursive(root.left);
  const right = depthFirstSearchRecursive(root.right);
  return [root.val, ...left, ...right];
}

const breathFirstSearchByQueue = (root) => {
  if (!root) return [];
  const result = [];
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    result.push(curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return result;
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

module.exports = {
  depthFirstSearchByStack,
  depthFirstSearchRecursive,
  breathFirstSearchByQueue,
};