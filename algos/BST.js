// BinarySearchTree class
// The add method should add a new leaf to the correct place in the tree based on the value passed in to the function.
// The contains method should see if the passed in value exists in the array and return true if the value does, otherwise false.
//  Implement the methods max and min that will find either the smallest or largest value in the Binary Search Tree and return the value.

function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.add = function(value) {
  // accepts a value and places in the tree in the correct position.
  const node = new BinarySearchTree(value);

  (function recur(bst) {
    if (bst.value > value && bst.left === undefined) {
      bst.left = node;
    } else if (bst.value > value) {
      recur(bst.left);
    } else if (bst.value < value && bst.right === undefined) {
      bst.right = node;
    } else if (bst.value < value) {
      recur(bst.right);
    }
  })(this);
};

console.log(BinarySearchTree.add(8));

BinarySearchTree.prototype.contains = function(value) {
  let checkContain = false;
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  (function recur(bst) {
    if (bst.value === value) {
      checkContain = true;
    } else if (bst.left !== undefined && value < bst.value) {
      recur(bst.left);
    } else if (bst.right !== undefined && value > bst.value) {
      recur(bst.right);
    }
  })(this);
  return checkContain;
};

BinarySearchTree.prototype.max = function() {
  if (!this) return null;
  let current = this;
  while (current.right) {
    current = current.right;
  }
  return current.value;
};

BinarySearchTree.prototype.min = function() {
  if (!this) return null;
  let current = this;
  while (current.left) {
    current = current.left;
  }
  return current.value;
};

class Bst {
  constructor() {
    this.root = null;
  }
  insert(data) {
    var node = new Node(data);

    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (current) {
      // duplicates check
      if (data === current.data) {
        return;
      }

      // left node insertion
      if (data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }

      //right node insertion
      if (data > current.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }
}
