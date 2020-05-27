/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

// function zip(l1, l2) {
//   if (!l1) return l2;
//   if (!l2) return l1;

//   // let L3 = new Node();
//   // let curr = L3;
//   let head = l1;
//   let curr = l1;
//   l1 = l1.next;
//   while (l1 && l2) {
//     curr.next = l2;
//     curr = curr.next;
//     l2 = l2.next;
//     curr.next = l1;
//     curr = curr.next;
//     l1 = l1.next;
//   }

//   curr.next = l2 ? l2 : l1;

//   return head;
// }

let A = new Node('a');
let B = new Node('b');
let C = new Node('c');
A.next = B;
B.next = C;

let X = new Node('x');
let Y = new Node('y');
let Z = new Node('z');
X.next = Y;
Y.next = Z;

console.log(zip(A, X));

function zip(l1, l2) {
  if (!l1) return l2;
  if (!l2) return l1;

  var curr = new Node(l1.value);
  curr.next = zip(l2, l1.next);
  return curr;
}

module.exports = { Node: Node, zip: zip };
