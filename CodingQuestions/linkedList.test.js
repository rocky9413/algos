const { removeDuplicatesFromLinkedList } = require('./linkedList');

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

test('removeDuplicatesFromLinkedList(linkedList)', () => {
  const head = new LinkedList(1);
  head.next = new LinkedList(1);
  head.next.next = new LinkedList(1);
  head.next.next.next = new LinkedList(3);
  const result = removeDuplicatesFromLinkedList(head);
  expect(result.next.value).toEqual(3);
});
