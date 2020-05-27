/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function deleteDups(head) {
  if (head === null || head.value === null || head.next === null) return head;
  const obj = {};
  let curr = head;
  obj[curr.value] = true;
  while (curr.next) {
    if (obj[curr.next.value]) {
      curr.next = curr.next.next;
    } else {
      obj[curr.next.value] = true;
      curr = curr.next;
    }
  }
  return head;
}

// const a = new Node('3');
// const b = new Node('2');
// const c = new Node('3');
// const d = new Node('1');
// const e = new Node('4');
// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// console.log(deleteDups(a));

module.exports = deleteDups;
