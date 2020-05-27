/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

// function pascalTriangle(numRows) {
//   if (numRows < 1) return [];
//   const arr = [];
//   for (let i = 0; i < numRows; i++) {
//     arr[i] = Array(i + 1).fill(1); // fill array with 1
//     for (let j = 1; j < arr[i].length - 1; j++) {
//       // set array elem in between first and last idx
//       // equal to the elem from previous row at idx-1 + idx
//       arr[i][j] = arr[i - 1][j - 1] + arr[i - 1][j];
//     }
//   }
//   return arr;
// }

// function pascalTriangle(numRows) {
//   if (numRows < 1) return [];
//   var triangle = [[1]];
//   var row;
//   for (var j = 0; j < numRows - 1; j++) {
//     row = [1];
//     // start from k = 1 because the first elem in the row is always 1, and is
//     // already in the row
//     // we iterate until we are at where the previous row ends.
//     // on each iteration we add the two values from the previous row
//     for (var k = 1; k < triangle[j].length; k++) {
//       row[k] = triangle[j][k - 1] + triangle[j][k];
//     }
//     row.push(1); // push the trailing 1 to complete the row
//     triangle.push(row);
//   }
//   return triangle;
// }

function pascalTriangle(n, triangle) {
  if (!n || n < 1) return [];
  // this line handles the initial call which may not pass in a triangle
  triangle = triangle || [[1]];
  // base case : n is 1. Return whatever our triangle is at that point.
  if (n < 2) return triangle;
  // recursive case:
  var row = [1];
  var prevRow = triangle[triangle.length - 1];
  for (var i = 1; i < prevRow.length; i++) {
    row.push(prevRow[i] + prevRow[i - 1]);
  }
  row.push(1);
  triangle.push(row);
  // at the end of the recursive case, make the recursive call with n - 1
  // keep in mind, n is only used as a counter. we build from triangle, which
  // will start from [[1]]
  return pascalTriangle(n - 1, triangle);
}

// console.log(pascalTriangle(3));

module.exports = pascalTriangle;
