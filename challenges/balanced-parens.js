/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

function balancedParens(input) {
  const arr = input.match(/[(\[{}\])]/g); // get all bracket char store in arr
  if (arr.length % 2 !== 0 || arr.length < 2) return false;
  if (arr[0] === ")" || arr[0] === "}" || arr[0] === "]") return false;

  const obj = { "(": ")", "{": "}", "[": "]" };
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(" || arr[i] === "{" || arr[i] === "[") {
      stack.push(arr[i]);
    } else {
      let pre = stack.pop();
      if (arr[i] !== obj[pre]) return false;
    }
  }
  return stack.length === 0 ? true : false;
}

// console.log(balancedParens(")("));
// console.log(balancedParens("[](){}"));
// console.log(balancedParens("[(]{)}"));

module.exports = balancedParens;
