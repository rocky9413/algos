// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

const ListNode = (val) => {
  this.val = val;
  this.next = null;
}

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

// const two = new ListNode(2);
// const four1 = new ListNode(4);
// const three = new ListNode(3);
// two.next = four1;
// four1.next = three;

// const five = new ListNode(5);
// const six = new ListNode(6);
// const four2 = new ListNode(4);
// five.next = six;
// six.next = four2;

// console.time('time1');
// console.log(addTwoNumbers(two, five));
// console.timeEnd('time1');
