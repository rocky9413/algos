// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
//i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
//takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
//punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

function matchWord(str) {
  if (str === "") return true;
  const regex = /[^A-Za-z]+/g;
  let newStr = str
    .replace(regex, " ")
    .toLowerCase()
    .trim();
  console.log(newStr);

  if (!newStr.includes(" ")) return false; // check if single string

  // compare data below
  const arr = newStr.split(" ");
  const result = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    const reversed = arr[i]
      .split("")
      .reverse()
      .join("");
    if (result[result.length - 1] === reversed) {
      result.splice(result.length - 1, 1);
    } else {
      result.push(arr[i]);
    }
  }
  return result.length === 0;
}

console.log(matchWord("_if_END_DNE----fi--"));
console.log(matchWord("__ENDDNE__"));
console.log(matchWord("IF()()fi[]"));
console.log(matchWord("for__if__rof__fi"));
console.log(matchWord("%%$@$while  try ! yrt  for if_fi rof #*#  elihw"));
console.log(matchWord(""));

module.exports = matchWord;
