/**
 * Create a stack. Then create a queue using two stacks.
 */

function Stack() {
  this.storage = {};
  this.length = 0;
}

Stack.prototype.push = function(val) {
  this.storage[this.length++] = val;
  return this.length;
};
Stack.prototype.pop = function() {
  const temp = this.storage[--this.length];
  delete this.storage[this.length];
  return temp;
};

/**
 * Queue Class
 */

function Queue(val) {
  this.stack1 = new Stack();
  this.stack2 = new Stack();
}

Queue.prototype.enqueue = function(val) {
  this.stack1.push(val);
  return this.stack1.length + this.stack2.length;
};
Queue.prototype.dequeue = function() {
  if (this.stack2.length === 0) {
    if (this.stack1.length === 0) {
      return undefined;
    }
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
  }
  return this.stack2.pop();
};

const queue1 = new Queue();
console.log(queue1.enqueue('a'));
console.log(queue1.enqueue('b'));
console.log(queue1.enqueue('c'));
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());
console.log(queue1.dequeue());

module.exports = { Stack: Stack, Queue: Queue };
