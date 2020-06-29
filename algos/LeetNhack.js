// get sum by manipulated k times, each time max value is divided by 2 and rounded up
const minSum = (num, k) => {
  if (num.length === 0) return 0;
  let index = 0;
  let max = Number.POSITIVE_INFINITY;
  let count = 0;
  while (k > 0) {
    let currentValue = num[index];
    if (currentValue <= max) {
      num.sort((a, b) => b - a);
      //   console.log(count++);
      index = 0;
      max = num[0] / 2;
      continue;
    }
    k--;
    currentValue = Math.ceil(currentValue / 2);
    num[index] = currentValue;
    if (index + 1 < num.length) index++;
    // console.log(count++);
  }
  return num.reduce((acc, current) => acc + current, 0);

  //   if (num.length === 0) return 0;
  //   const sortNum = num.slice();
  //   for (let i = 0; i < k; i++) {
  //     sortNum.sort((a, b) => b - a);
  //     sortNum[0] = Math.ceil(sortNum[0] / 2);
  //   }
  //   return sortNum.reduce((acc, current) => acc + current, 0);
};
// console.log(minSum([3, 5, 6, 3, 3, 3, 8], 5));

//
const smallestDivisor = (s, t) => {
  if (s.length % t.length > 0) return -1;
  let newTString = '';
  for (let i = 0; i * t.length < s.length; i += 1) {
    newTString += t;
  }
  if (newTString !== s) return -1;
  for (let i = 1; i <= t.length; i += 1) {
    let commonString = '';
    const subString = t.substring(0, i);
    console.log(subString);
    while (commonString.length < t.length) {
      commonString += subString;
      console.log(commonString);
    }
    if (commonString === t) return i;
  }
  return -1;
};
