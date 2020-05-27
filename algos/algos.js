function rangeOfNumbers(startNum, endNum) {
  if (startNum === endNum) return [endNum];
  const number = rangeOfNumbers(startNum + 1, endNum);
  number.unshift(startNum);
  console.log(number);
  return number;
}
// console.log(rangeOfNumbers(2, 5));

function countdown(myArray, n) {
  //   if (n < 1) return [];
  //   myArray = countdown(myArray, n - 1);
  //   myArray.unshift(n);
  //   return myArray;
  if (n < 1) return [];
  else {
    myArray.push(n);
    countdown(myArray, n - 1);
  }
  return myArray;
}
// console.log(countdown([], 5));

// new code below -->
// ==========================================
