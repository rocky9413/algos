const {
    depthFirstSearchByStack,
    depthFirstSearchRecursive,
    breathFirstSearchByQueue,
    includesBFS,
    includesDFSRecursive,
    sumDFSStack,
    sumDFSRecursive,
    sumBFSQueue,
    minValueDFS,
    minValueBFS,
    minValueDFSRecursive,
    maxSumPathDFS,
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
    const result = depthFirstSearchByStack(tree);
    expect(result).toEqual([1,2,4,5,3]);
  });
  
  test('depthFirstSearchRecursive(root)', () => {
    const tree = new BinaryTree('A').insert(['B', 'C', 'D', 'E']);
    const result = depthFirstSearchRecursive(tree);
    expect(result).toEqual(['A', 'B', 'D', 'E', 'C']);
  });

  test('breathFirstSearchByQueue(root)', () => {
    const tree = new BinaryTree('A').insert(['B', 'C', 'D', 'E']);
    const result = breathFirstSearchByQueue(tree);
    expect(result).toEqual(['A', 'B', 'C', 'D', 'E']);
  });

  test('includesBFS(root, val) | includesDFSRecursive', () => {
    const tree1 = new BinaryTree('A').insert(['B', 'C', 'D', 'E']);
    const tree2 = new BinaryTree(1).insert([2,3,4,5])
    const bfsResult1 = includesBFS(tree1, 'E');
    const bfsResult2 = includesBFS(tree2, 8);
    const dfsResult1 = includesDFSRecursive(tree1, 'E');
    const dfsResult2 = includesDFSRecursive(tree2, 8);
    expect(bfsResult1).toEqual(true);
    expect(bfsResult2).toEqual(false);
    expect(dfsResult1).toEqual(true);
    expect(dfsResult2).toEqual(false);
  });

  test('sumDFSStack | sumDFSRecursive | sumBFSQueue', () => {
    const tree = new BinaryTree(3).insert([11, 4, 4, 2, 1])
    const dfsStack = sumDFSStack(tree);
    const dfsRecursive = sumDFSRecursive(tree);
    const bfsQueue = sumBFSQueue(tree);
    expect(dfsStack).toEqual(25);
    expect(dfsRecursive).toEqual(25);
    expect(bfsQueue).toEqual(25);
  });
  
  test('minValueDFS | minValueBFS | minValueDFSRecursive', () => {
    const tree = new BinaryTree(3).insert([11, 4, 4, 2, 1])
    const dfsStack = minValueDFS(tree);
    const dfsRecursive = minValueDFSRecursive(tree);
    const bfsQueue = minValueBFS(tree);
    expect(dfsStack).toEqual(1);
    expect(dfsRecursive).toEqual(1);
    expect(bfsQueue).toEqual(1);
  });

  test('maxSumPathDFS |  | ', () => {
    const tree = new BinaryTree(3).insert([11, 4, 4, 2, 1])
    const dfsStack = maxSumPathDFS(tree);
    // const dfsRecursive = minValueDFSRecursive(tree);
    // const bfsQueue = minValueBFS(tree);
    expect(dfsStack).toEqual(18);
    // expect(dfsRecursive).toEqual(1);
    // expect(bfsQueue).toEqual(1);
  });
