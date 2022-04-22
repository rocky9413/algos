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

const includesBFS = (root, target) => {
  if (!root) return false;
  const queue = [root];
  while (queue.length > 0) {
    const curr = queue.shift();
    if (curr.val === target) return true;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return false;
}
const includesDFSRecursive = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  const left = includesDFSRecursive(root.left, target);
  const right = includesDFSRecursive(root.right, target);
  return left || right;
}

const sumDFSStack = (root) => {
  if (!root) return 0;
  let sum = 0;
  const stack = [root];
  while (stack.length > 0) {
    const curr = stack.pop();
    sum += curr.val;
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return sum;
}
const sumDFSRecursive = (root) => {
  if (!root) return 0;
  const left = sumDFSRecursive(root.left);
  const right = sumDFSRecursive(root.right);
  return root.val + left + right;
}
const sumBFSQueue = (root) => {
  if (!root) return 0;
  const queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return sum;
}

const minValueDFS = (root) => {
  if (!root) return -1;
  const stack = [root];
  let min = Number.POSITIVE_INFINITY;
  while (stack.length > 0) {
    const curr = stack.pop();
    min = Math.min(min, curr.val);
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return min;
}
const minValueDFSRecursive = (root) => {
  if (!root) return Number.POSITIVE_INFINITY;
  const left = minValueDFSRecursive(root.left);
  const right = minValueDFSRecursive(root.right);
  return Math.min(root.val, left, right);
}
const minValueBFS = (root) => {
  if (!root) return -1;
  const queue = [root];
  let min = Number.POSITIVE_INFINITY;
  while (queue.length > 0) {
    const curr = queue.shift();
    min = Math.min(min, curr.val);
    if (curr.left) queue.push(curr.left);
    if (curr.right) queue.push(curr.right);
  }
  return min;
}

const maxSumPathDFS = (root) => {
  // if (!root) return 0;
  // const stack = [];
  // let maxSum = 0;
  // let currSum = 0;
  // while (stack.length > 0) {
  //   const curr = stack.pop();
  //   maxSum += curr.val;
  //   if (!curr.left && curr.right) maxSum += curr.right.val;
  //   if (!curr.right && curr.left) maxSum += curr.left.val;
  //   if (curr.left && curr.right) maxSum += Math.max(curr.right.val, curr.right.val)

  // }
  if (!root) return Number.NEGATIVE_INFINITY;
  if (!root.left && !root.right) return root.val;
  const left = maxSumPathDFS(root.left);
  const right = maxSumPathDFS(root.right);
  return Math.max(left, right) + root.val;
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
  includesBFS,
  includesDFSRecursive,
  sumDFSStack,
  sumDFSRecursive,
  sumBFSQueue,
  minValueDFS,
  minValueDFSRecursive,
  minValueBFS,
  maxSumPathDFS,
};