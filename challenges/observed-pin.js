/*
Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. 
We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to 
this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the 
PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually 
be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it 
could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they 
never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array 
of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs. 
But please note that all PINs, the observed one and also the results, must be strings, because of 
potentially leading '0's. Don't worry about the order of the array.

Detective, we count on you!

expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"],
}

*/

function getPINs(observed) {
  const combos = [];
  const adjacent = {
    '0': ['8'],
    '1': ['2', '4'],
    '2': ['1', '3', '5'],
    '3': ['2', '6'],
    '4': ['1', '5', '7'],
    '5': ['2', '4', '6', '8'],
    '6': ['3', '5', '9'],
    '7': ['4', '8'],
    '8': ['5', '7', '9', '0'],
    '9': ['6', '8'],
  };
  if (typeof observed !== 'string') observed = observed.toString();
  const strDigits = observed.split('');

  getCombos(strDigits, 0, '');

  return combos;

  // Depth first combinatorial traversal
  function getCombos(digits, idx, curCombo) {
    const curDigit = digits[idx]; // Get possible candidates
    const candidates = new Set(adjacent[curDigit]);
    candidates.add(curDigit);

    // console.log(digits, idx, curCombo, candidates); // Pretty cool
    candidates.forEach(el =>
      idx === digits.length - 1 ? reachedEnd(el) : goDeeper(el)
    );

    // (Avoiding anon funcs)
    function reachedEnd(candidate) {
      combos.push(curCombo + candidate);
    }
    function goDeeper(candidate) {
      getCombos(digits, idx + 1, curCombo + candidate);
    }
  }
}

// const getPINs = (observed) => {
//   //Determine whether the current passed in pin is equal to 1

//     //LOGIC: If breaking a problem into subproblems where there is optimal substructure (I can solve the larger problems by solving the smaller problems) and have overlapping subproblems (each smaller problem is solved the same way), my base case is figuring out the solution to the problem if only one pin were being assessed.
//     if (observed.length === 1) return retrievePossibs(observed)
//   ​
//     //LOGIC: If our base case hasn't been reached, recursively call the function, creating smaller problems to solve. The result of this evaluation is an array of possible combinations that have been calculated for the subproblems
//     const curPossibs = getPINs(observed.slice(1))
//   ​
//   //**Things to keep in mind**: time complexity of native methods such as concat.
//   ​
//     //LOGIC: The array of current possibilities evaluated for the smaller sub problems is used to build the new list of possibilites using the first digit in the current-observed-execution context (i.e.; if the original observed were '137', and im currently solving for the possibilities that exist for the subproblem: '37', the digit in question would be 3). This evaluation is returned back to the caller and we continue to build the list of possibilities until we solve the original question by prepending the values in the array being reduced (dictionary[observed[0]]) to the each of the values that currently exist in the array of possibilities (represented by the variable, curPossibs).
//       return retrievePossibs(observed[0]).reduce((accum, num) => [...accum, ...curPossibs.map(pins => num.concat(pins))]
//     , [])
//   }
//   ​
// //Helper Funcs
// const retrievePossibs = (digit) =>{
//    const dictionary = {
//     0: ['8', '0'],
//     1: ['1', '2', '4'],
//     2: ['1', '2', '3', '5'],
//     3: ['2', '3', '6'],
//     4: ['1', '4', '5', '7'],
//     5: ['2', '4', '5', '6', '8'],
//     6: ['3', '5', '6', '9'],
//     7: ['4', '7', '8'],
//     8: ['5', '7', '8', '9', '0'],
//     9: ['6', '8', '9']
//   }
//   return dictionary[digit];
// }

// console.log(getPINs('11'));

module.exports = getPINs;
