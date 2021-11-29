const { 
    findClosestValueInBst,
    branchSums,
    nodeDepths,
} = require('./BST');

class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
}

class BinaryTree extends BST {
    constructor(value) {
      super(value);
    }
  
    insert(values, i = 0) {
      if (i >= values.length) return;
      const queue = [this];
      while (queue.length > 0) {
        let current = queue.shift();
        if (current.left === null) {
          current.left = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BinaryTree(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
}

test('findClosestValueInBst(tree, target)', () => {
    const tree = new BST(10);
    tree.left = new BST(5);
    tree.left.left = new BST(2);
    tree.left.right = new BST(5);
    tree.left.left.left = new BST(1);
    tree.right = new BST(15);
    tree.right.left = new BST(13);
    tree.right.right = new BST(22);
    tree.right.left.right = new BST(14);
    // const tree = new BinaryTree(10).insert([5, 15, 2, 5, 13, 22, 1, 14]);
    const result1 = findClosestValueInBst(tree, 12);
    expect(result1).toEqual(13);
    const result2 = findClosestValueInBst(tree, 6);
    expect(result2).toEqual(5);
});

test('branchSums(root)', () => {
    const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const result = branchSums(tree);
    expect(result).toEqual([15, 16, 18, 10, 11]);
});

test('nodeDepths(root)', () => {
  const tree = new BinaryTree(1).insert([2, 3, 4, 5, 6, 7, 8, 9]);
  const result = nodeDepths(tree);
  expect(result).toEqual(16);
});