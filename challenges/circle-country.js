/**
 *  Circle Country is a country that contains several circular-shaped districts.
 *  Some districts may be situated inside other districts, but their borders do not intersect or touch.
 *  Tyus is a resident of Circle Country. When he travels between two locations, he always tries to cross the fewest number of district borders as possible.
 *
 *  You are given an array x, an array y, and an array r
 *
 *    - (x[i],y[i]) are the coordinates of the i-th circle's center and r[i] is its radius
 *
 *  In addition to the arrays, you are also given the numbers start_x, start_y, end_x, and end_y
 *
 *    - (start_x, start_y) are Tyus' starting coordinates and (end_x, end_y) are Tyus' destination coordinates
 *
 *
 *  Write an efficient algorithm for finding the minimum number of district borders Tyus must cross in order to get from
 *  (start_x, start_y) to (end_x, end_y)
 *
 *  Constraints:
 *    - x, y and r will each contain the same number of elements
 *    - (start_x, start_y) and (end_x, end_y) will never lie on a circle's border
 *    - no circle borders intersect/touch (but they can be nested)
 *
 */

function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
  let totalBordersCrossed = 0;
  for (let i = 0; i < x.length; i++) {
    let distFromStart = Math.hypot(x[i] - start_x, y[i] - start_y);
    //i=0: distFromStart = Math.hypot(2-2, 2-2) = Math.hypot(0, 0) = 0
    //i=1: distFromStart = Math.hypot(2-2, 2-2) = Math.hypot(0, 0) = 0
    //i=2: distFromStart = Math.hypot(5-2, 4-2) = Math.hypot(3, 2) = 3.6
    let distFromEnd = Math.hypot(x[i] - end_x, y[i] - end_y);
    //i=0: distFromEnd = Math.hypot(2-5, 2-4) = Math.hypot(-3, -2) = 3.6
    //i=1: distFromEnd = Math.hypot(2-5, 2-4) = Math.hypot(-3, -2) = 3.6
    //i=2: distFromEnd = Math.hypot(5-5, 4-4) = Math.hypot(0, 0) = 0
    let radius = r[i];
    //i=0: radius = 1
    //i=1: radius = 2
    //i=2: radius = 1
    if (
      (distFromStart < radius && distFromEnd > radius) ||
      (distFromStart > radius && distFromEnd < radius)
    ) {
      totalBordersCrossed++;
      //i=0: totalBordersCrossed = 1
      //i=1: totalBordersCrossed = 2
      //i=2: totalBordersCrossed = 3
    }
  }
  return totalBordersCrossed;
}

// // functional programming approach
// function circleCountry (x, y, r, start_x, start_y, end_x, end_y) {
//   var total = 0;
//   for (var i = 0; i < x.length; i++){
//     var d1 = Math.hypot(x[i]-start_x, y[i]-start_y);
//     var d2 = Math.hypot(x[i]-end_x, y[i]-end_y);
//     var radius = r[i];
//     if (d1 < radius && d2 > radius || d1 > radius && d2 < radius){
//       total++;
//     }
//   }
//   return total;
// }

// // object-oriented
// function circleCountry(x, y, r, start_x, start_y, end_x, end_y) {
//   var circlesToCross = 0;
//   for (var i = 0; i < x.length; i++) {
//     var circle = new Circle(x[i], y[i], r[i]);
//     if (circle.contains(start_x, start_y) !== circle.contains(end_x, end_y))
//       circlesToCross++;
//   }
//   return circlesToCross;
// }

// function Circle(x, y, r) {
//   this.x = x;
//   this.y = y;
//   this.r = r;
// }

// Circle.prototype.contains = function(x, y) {
//   var distanceFromCenter = Math.hypot(this.x - x, this.y - y);
//   return this.r >= distanceFromCenter;
// };

x = [2, 2, 5];
y = [2, 2, 4];
r = [1, 2, 1];
start_x = 2;
start_y = 2;
end_x = 5;
end_y = 4;
// console.log(circleCountry(x, y, r, start_x, start_y, end_x, end_y));

module.exports = circleCountry;
