/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate
 *   - 'NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y) {
  // const obj = {}
  // for(let i = 0; i < x.length; i++){
  //     if(x[i] && y[i])
  // }
}

// function newIntersections(x, y){
//   // key is to detect how many places a horizonal line intersects a vertical line. we want to find points simultaneously in between the minimum and maximum of a vertical range and of a horizontal range.
 
//  // We want to assign a range (max and min) of y values for every x vertical, and a range of x values for every y horizontal.
 
//  const xs = x.reduce((acc, xCoord, index) => {
//    //if the xcoord doesn't exist on our oject, assign an object to that property at that current point on y
//    if (!acc[xCoord]) acc[xCoord] = { min: y[index] , max: y[index]}
//    acc[xCoord].max = Math.max(acc[xCoord].max, y[index])
//    acc[xCoord].min = Math.min(acc[xCoord].min, y[index])
//    return acc;
//  }, {})
//  console.log('xs: ', xs)
//   const ys = y.reduce((acc, yCoord, index)=>{
//    if (!acc[yCoord]) acc[yCoord] = { min: x[index] , max: x[index]}
//    acc[yCoord].max = Math.max(acc[yCoord].max, x[index])
//    acc[yCoord].min = Math.min(acc[yCoord].min, x[index])
//    return acc;
//  }, {})
//  console.log('ys: ', ys)
//  let intersections = 0;
//  // Count times an x's vertical max and min encompassed a y coordinate, while that y coordinate's horizontal max and min encompassed the x coordinate.
//  for(let x in xs) {
//    for (let y in ys) {
//      if ( y < xs[x].max && y > xs[x].min
//      &&  x < ys[y].max && x > ys[y].min) { 
//        intersections++
//      }
//    }
//  }
//  return intersections
// }
​
// const x = [2, 2, 4, 4, 6]
// const y = [3, 5, 3, 8, 5]
// console.log(newIntersections(x, y))

// console.log(newIntersections([3, 5, 8], [3, 6, 2]))

module.exports = newIntersections;
