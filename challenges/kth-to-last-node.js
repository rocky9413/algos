/**
 * Write a function that takes two parameters, an integer and the head of a
 * singly linked list, and returns the VALUE on the kth to last node in the list.
 *
 * const a = new Node('A');
 * const b = new Node('B');
 * const c = new Node('C');
 * const d = new Node('D');
 * const e = new Node('E');
 *
 * a.next = b;
 * b.next = c;
 * c.next = d;
 * d.next = e;
 *
 * kthToLastNode(2, a); -> returns 'D' (the value on the second to last node)
 */

// const a = new Node('A');
// const b = new Node('B');
// const c = new Node('C');
// const d = new Node('D');
// const e = new Node('E');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;

function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  let current = head; // initiate current as the head
  const arr = []; // declare arr to store node value;
  while (current.next !== null) { // last loop while e.next === null
    arr.push(current.value); 
    current = current.next;
  } 

  arr.push(current.value); // push last node value to arr
  // return arr[arr.length-k]; other index return undefined by default;
  return arr[arr.length-k];
}

// console.log(kthToLastNode(2, a));

module.exports = {Node: Node, kthToLastNode: kthToLastNode};
