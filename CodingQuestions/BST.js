/**
 * BST Construction
 */
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  contains(value) {
    if (value === this.value) {
      return true;
    } else if (value < this.value) {
      if (this.left === null) {
        return false;
      }
      this.left.contains(value);
    } else {
      if (this.right === null) {
        return false;
      }
      this.right.contains(value);
    }
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }

  remove(value, parent = null) {
    // can't remove values from a single-note tree
    if (value < this.value) {
      if (this.left !== null) {
        this.left.remove(value, this);
      }
    } else if (value > this.value) {
      if (this.right !== null) {
        this.right.remove(value, this);
      }
    } else {
      if (this.left !== null && this.right !== null) {
        this.value = this.right.getMinValue();
        this.right.remove(this.value, this);
      } else if (parent !== null) {
        if (this.left !== null) {
          this.value = this.left.value;
          this.right = this.left.right;
          this.left = this.left.left;
        } else if (this.right !== null) {
          this.value = this.right.value;
          this.left = this.right.left;
          this.right = this.right.right;
        } else {
          // This is a single-node tree; do nothing
        }
      } else if (parent.left === this) {
        parent.left = this.left !== null ? this.left : this.right;
      } else if (parent.right === this) {
        parent.right = this.left !== null ? this.left: this.right;
      }
    }
    return this;
  }

  getMinValue() {
    if (this.left === null) {
      return this.value;
    } else {
      return this.left.getMinValue();
    }
  }
}

/**
 * Find Closest Value in BST - input BST and a target integer value
 * returns the closest value to that target value contained in the BST. Assume only one closest value.
 */
const findClosestValueInBst = (tree, target) => {
  // helper option 1
  const findClosestValueInBstHelper1 = (tree, target, closest) => {
    if (tree === null) return closest;
    if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
      closest = tree.value;
    }
    if (target < tree.value) {
      return findClosestValueInBstHelper(tree.left, target, closest);
    } else if (target > tree.value) {
      return findClosestValueInBstHelper(tree.right, target, closest);
    } else {
      return closest;
    }
  };
  // helper option 2
  const findClosestValueInBstHelper2 = (tree, target, closest) => {
    let currentNode = tree;
    while (currentNode !== null) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
        closest = currentNode.value;
      }
      if (target < currentNode.value) {
        currentNode = currentNode.left;
      } else if (target > currentNode.value) {
        currentNode = currentNode.right;
      } else {
        return closest;
      }
    }
    return closest;
  };

  return findClosestValueInBstHelper2(tree, target, tree.value);
};

/**
 * A BST return a list of its branch sums ordered from leftmost breanch sum to rightmost branch sum.
 * Tree = 1, 2-3, 4-5-6-7, 8-9-10 | Output: [15, 16, 18, 10, 11]
 */
const branchSums = (root) => {
  const sumArray = [];

  const branchSumsHelper = (root, calculateSum, sumArray) => {
    if (!root) return;
    const branchSum = calculateSum + root.value;
    // when no left or right it is the leaf
    if (!root.left && !root.right) {
      sumArray.push(branchSum);
      return;
    }
    branchSumsHelper(root.left, branchSum, sumArray);
    branchSumsHelper(root.right, branchSum, sumArray);
  };

  branchSumsHelper(root, 0, sumArray);
  return sumArray;
};

/**
 * Node Depths - The distance between a node in a Binary Tree and the tree's root
 * Return the sum of its nodes' depths.
 */
const nodeDepths = (root) => {
  const sumNodeDepth = (root, depth) => {
    if (!root) return 0;
    return (
      depth +
      sumNodeDepth(root.left, depth + 1) +
      sumNodeDepth(root.right, depth + 1)
    );
  };
  return sumNodeDepth(root, (depth = 0));
};

class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    array.push(this.name);
    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}

module.exports = {
  findClosestValueInBst,
  branchSums,
  nodeDepths,
};
