/*
 * Create a stack with the push, pop, and getMax methods.
 * push should return the new length of the stack.
 * pop should return the element that was just removed.
 * getMax should return the largest value currently in the stack.
 * BONUS: The getMax method should retrieve the maximum value from the stack in O(1) time.
 */

function Stack() {
  this.storage = {};
  this.index = 0;
  this.max = {
    idx: 0,
    val: Number.NEGATIVE_INFINITY,
  };
}

Stack.prototype.setNewMax = function() {
  for (let i in this.storage) {
    if (this.storage[i] > this.max.val) {
      this.max.val = this.storage[i];
      this.max.idx = i;
    }
  }
};

Stack.prototype.resetMax = function() {
  this.max.val = Number.NEGATIVE_INFINITY;
  this.max.idx = -1;
  return;
};

Stack.prototype.push = function(val) {
  if (val > this.max.val) {
    this.max.idx = this.index;
    this.max.val = val;
  }
  this.storage[this.index++] = val;
  return this.index;
};
Stack.prototype.pop = function() {
  if (this.index > 0) {
    let removed = this.storage[--this.index];
    if (removed === this.max.val) {
      this.resetMax();
    }
    delete this.storage[this.index];
    this.setNewMax();
    return removed;
  }
  return undefined;
};
Stack.prototype.getMax = function() {
  return this.index === 0 ? undefined : this.max.val;
};

const obj = new Stack();
obj.push(2);
obj.push(8);
obj.push(6);
obj.push(10);
obj.pop();
const max = obj.getMax();
console.log(obj.storage);
console.log(max);

module.exports = Stack;
