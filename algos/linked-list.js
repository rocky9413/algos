function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) | Output: 7 -> 0 -> 8 | Explanation: 342 + 465 = 807
const addTwoNumbers = (l1, l2) => {
  let node = null;
  const carry = arguments[2];
  if (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const next1 = l1 ? l1.next : null;
    const next2 = l2 ? l2.next : null;
    const val = carry ? val1 + val2 + 1 : val1 + val2;
    node = new ListNode(val % 10);
    node.next = addTwoNumbers(next1, next2, val >= 10);
  } else if (carry) {
    node = new ListNode(1);
    node.next = null;
  }
  return node;
};
const two = new ListNode(2);
const four1 = new ListNode(4);
const three = new ListNode(3);
two.next = four1;
four1.next = three;

const five = new ListNode(5);
const six = new ListNode(6);
const four2 = new ListNode(4);
five.next = six;
six.next = four2;

console.time('time1');
console.log(addTwoNumbers(two, five));
console.timeEnd('time1');

function ListNodeOddEven(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Odd Even Linked List //50% | O(1) space O(nodes) time
const oddEvenList = function (head) {
  if (!head) return null;
  if (!head.next || !head.next.next) return head;
  let count = 0;
  let currentNode = head;
  let firstEven = currentNode.next;

  while (currentNode) {
    let nextNode = currentNode.next;
    ++count;
    if (!currentNode.next || !currentNode.next.next) {
      if (count % 2 === 0) {
        currentNode.next = null;
      } else {
        currentNode.next = firstEven;
      }
    } else {
      currentNode.next = currentNode.next.next;
    }
    currentNode = nextNode;
  }
  return head;
};

// Remove Linked List Elements | O (n) time, O(1) space
const removeElements = function (head, val) {
  if (!head || !val) return head;
  // check first node
  while (head && head.val === val) {
    head = head.next;
  }
  let currentNode = head;

  while (currentNode && currentNode.next) {
    if (currentNode.next.val === val) currentNode.next = currentNode.next.next;
    else currentNode = currentNode.next;
  }

  return head;
  // recursive solution
  // head.next = removeElements(head.next, val);
  // return (head.val === val) ? head.next : head;
};

// Copy List with Random Pointer
function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random; // index
}
// return a deep copy of the list
const copyRandomList = (head) => {
  if (!head) return null;
  let curr = head;
  while (curr) {
    let copy = new Node(curr.val, curr.next, null);
    copy.next = curr.next;
    curr.next = copy;
    curr = curr.next;
    curr = curr.next;
  }

  curr = head;
  while (curr) {
    curr.next.random = curr.random ? curr.random.next : null;
    curr = curr.next.next;
  }

  curr = head;
  let result = head.next;
  let resPtr = result;
  while (curr) {
    curr.next = curr.next.next;
    curr = curr.next;
    resPtr.next = resPtr.next ? resPtr.next.next : null;
    resPtr = resPtr.next;
  }
  return result;
};
