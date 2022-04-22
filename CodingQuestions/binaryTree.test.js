const {
    depthFirstSearchByStack,
    depthFirstSearchRecursive,
    breathFirstSearchByQueue,
  } = require('./binaryTree');
  
  class BST {
    constructor(value) {
      this.val = value;
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
          current.left = new BST(values[i]);
          break;
        }
        queue.push(current.left);
        if (current.right === null) {
          current.right = new BST(values[i]);
          break;
        }
        queue.push(current.right);
      }
      this.insert(values, i + 1);
      return this;
    }
  }
  
  test('depthFirstSearchByStack(root)', () => {
    const tree = new BinaryTree(1).insert([2,3,4,5]);
    console.log(tree)
    const result = depthFirstSearchByStack(tree);
    expect(result).toEqual([1,2,4,5,3]);
  });
  
  test('depthFirstSearchRecursive(root)', () => {
    const tree = new BinaryTree('A').insert(['B', 'C', 'D', 'E']);
    const result = depthFirstSearchRecursive(tree);
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C']);
  });
  