/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

let A = new Node(2);
let B = new Node(1);
let C = new Node(5);
A.next = B;
B.next = C;

let R = new Node(5);
let S = new Node(9);
let T = new Node(2);
R.next = S;
S.next = T;

// console.log(A);
// console.log(R);

console.log(addLinkedList(A, R));

function addLinkedList(l1, l2) {
  let head,
    c = head,
    one = l1,
    two = l2,
    carry = 0;
  while (one || two) {
    let x = 0,
      y = 0,
      sum = carry,
      next,
      tmpNode;
    if (one.value) x = one.value;
    if (two.value) y = two.value;
    sum += x + y;
    carry = Math.floor(sum / 10);
    next = sum % 10;
    tmpNode = new Node(next);
    if (head === undefined) {
      head = new Node(next);
      c = head;
    } else {
      c.next = tmpNode;
      c = c.next;
    }
    if (one.next !== null) one = one.next;
    else one = false;
    if (two.next !== null) two = two.next;
    else two = false;
  }
  if (carry > 0) {
    let lastNode = new Node(carry);
    c.next = lastNode;
  }
  return head;

  // let node = null;
  // const carry = arguments[2];
  // if (l1 || l2) {
  //   const val1 = l1 ? l1.value : 0;
  //   const val2 = l2 ? l2.value : 0;
  //   const next1 = l1 ? l1.next : null;
  //   const next2 = l2 ? l2.next : null;
  //   const val = carry ? val1 + val2 + 1 : val1 + val2;
  //   node = new Node(val % 10);
  //   node.next = addLinkedList(next1, next2, val >= 10);
  // } else if (carry) {
  //   node = new Node(1);
  //   node.next = null;
  // }
  // return node;
}

module.exports = { Node: Node, addLinkedList: addLinkedList };
