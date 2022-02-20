/**
 * Remove Duplicates From Linked List
 * A Singly Linked List with nodes in sorted order with respect to their values.
 * Return the modified Linked List that doesn't contain any nodes with duplicate values.
 * The Linked List should be modified in place (i.e., you shouldn't create a brand new list)
 */
const removeDuplicatesFromLinkedList = (linkedList) => {
  let currentNode = linkedList;

  while (currentNode !== null) {
    let nextNode = currentNode.next;
    while (nextNode !== null && currentNode.value === nextNode.value) {
      nextNode = nextNode.next;
    }

    currentNode.next = nextNode;
    currentNode = nextNode;
  }

  return linkedList;
};

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  removeDuplicatesFromLinkedList,
};
