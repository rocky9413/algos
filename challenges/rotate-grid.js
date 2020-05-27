/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
 */

// o(n) space
// function rotateGrid(grid, n) {
//   const newArr = [];
//   for (let i = 0; i < grid.length; i++) {
//     newArr[i] = [];
//     for (let j = n - 1; j >= 0; j--) {
//       newArr[i].push(grid[j][i]);
//     }
//   }
//   return newArr;
// }

function rotateGrid(grid, n) {
  for (let i = 0; i < Math.floor(n / 2); i++) {
    let first = i;
    let last = n - 1 - i;

    for (let j = first; j < last; j++) {
      let adjust = j - first;
      let top = grid[first][j];

      // top-left
      grid[first][j] = grid[last - adjust][first];
      // bottom-left
      grid[last - adjust][first] = grid[last][last - adjust];
      // bottom-right
      grid[last][last - adjust] = grid[j][last];
      // top-right
      grid[j][last] = top;
    }
  }
  return grid;
}

// console.log(
//   rotateGrid([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]], 4)
// );

// *  [   [1, 2, 3, 4],         [13, 9, 5, 1],
//  *     [5, 6, 7, 8],         [14, 10, 6, 2],
//  *     [9, 10, 11, 12]       [15, 11, 7, 3]
//        [13, 14, 15, 16]       [16, 12, 8, 4]

module.exports = rotateGrid;
