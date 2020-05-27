/**
 * We are familar with linked lists being linear and terminating:
 *
 * A->B->C->D
 *
 * However, linked lists can also have cyclical references:
 *
 * A->B->C->D
 *    ^     |
 *    |     V
 *    G<-F<-E
 *
 * Create a function that accepts a linked list and returns true if the linked list has a cyclical reference
 *
 * var node1 = new Node('1');
 * var node2 = node1.next = new Node('2');
 * var node3 = node2.next = new Node('3');
 * var node4 = node3.next = new Node('4');
 * var node5 = node4.next = new Node('5');
 * hasCycle(node1); // => false
 * node5.next = node2;
 * hasCycle(node1); // => true
 *
 * Challenge 1: Do this in linear time
 * Challenge 2: Do this in constant space
 * Challenge 3: Do not mutate the original nodes in any way
 *
 */

var Node = function(value) {
  this.value = value;
  this.next = null;
};

// function hasCycle(head) {
//   if (head === null || head.next === null) return false; // check if node is valid and more than one node
//   let fast = head; // declare a second pointer node
//   head = head.next; // move head node one step each time
//   fast = fast.next.next; // more second node two step each time
//   while (head !== null) {
//     // fast will move twice fast, if cycle, fast will equal head at half
//     if (head === fast) return true;
//     if (head.next === null || fast.next === null) return false;
//     head = head.next;
//     fast = fast.next.next;
//   }
// }

// "Tortoise & Hare"
function hasCycle(linkedList) {
  if (linkedList && linkedList.next) {
    return findCycle(linkedList, linkedList.next); // findCy(1, 2)
  }
  return false;
}

function findCycle(tortoise, hare) {
  if (tortoise === hare) return true;
  return (
    hare !== null &&
    hare.next !== null &&
    findCycle(tortoise.next, hare.next.next)
  );
  // findCy(2, 4) // finCy(3, 2) // finCy(4, 4)
}

var node1 = new Node('1');
var node2 = (node1.next = new Node('2'));
var node3 = (node2.next = new Node('3'));
var node4 = (node3.next = new Node('4'));
var node5 = (node4.next = new Node('5'));
console.log(hasCycle(node1)); // => false
node5.next = node2;
console.log(hasCycle(node1)); // => true
console.log(node1);

module.exports = { Node: Node, hasCycle: hasCycle };
