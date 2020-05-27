/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  const newNode = new Node(val); // create the new node with the val

  // if no nodes in the list yet
  if (this.head === null) this.head = newNode;
  else {
    this.tail.next = newNode; // add newNode to current tail.next
    newNode.prev = this.tail; // link newNode.prev to tail
  }
  this.tail = newNode; // reassign the tail to be the new node
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  let current = this.head;
  while (current) {
    if (current.val === val) {
      if (current === this.head && current === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (current == this.head) {
        this.head = this.head.next;
        this.head.prev = null;
      } else if (current == this.tail) {
        this.tail = this.tail.prev;
        this.tail.next = null;
      } else {
        current.prev.next = current.next;
        current.next.prev = current.prev;
      }
      return val;
    }
    current = current.next;
  }
  return;
};

// const one = new LinkedList();
// one.add(4);
// one.add(5);
// one.add(6);
// one.remove(5);
// console.log(one);

module.exports = LinkedList;
