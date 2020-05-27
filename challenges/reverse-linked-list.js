/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  let curr = head;
  let previous = null;
  let next;
  // 1-2-3-null
  while (curr) {
    next = curr.next; // save next before override
    curr.next = previous; // reverse 2 = null // 3 = 1 // null = 2
    previous = curr; // previous = 1 // pre = 2 // pre = 3
    curr = next; // move curr = 2 // curr = 3 // curr = null
  }
  head = previous;
  return head; // 3-2-1-null
}

let A = new Node('a');
let B = new Node('b');
let C = new Node('c');
A.next = B;
B.next = C;

console.log(reverseLinkedList(A));

// // recursive
// function reverseLinkedList(head) {
//   if (!head || !head.next) return head;

//   let h = head;
//   let t = h.next;
//   let end = reverseLinkedList(t);

//   h.next.next = h;
//   h.next = null;

//   return end;
// }

module.exports = { Node: Node, reverseLinkedList: reverseLinkedList };
