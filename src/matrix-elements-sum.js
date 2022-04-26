const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //this costal;)
  if (matrix.length < 2) {
    return 0;
  }
  let zeroHeigh = [];
  let sum = [];
  let columnCount = matrix[0].length;

  for (let i = 0; i < columnCount; i++) {
    zeroHeigh = [];
    for (let j = 0; j < matrix.length; j++) {
      //console.log(j - 1, i);
      if (matrix[j][i] === 0 && zeroHeigh.length === 0) {
        zeroHeigh.push(i);
      } else if (matrix[j][i] !== 0 && zeroHeigh.length === 0) {
        sum.push(matrix[j][i]);
      }
    }
  }
  return sum.reduce((a, b) => a + b);
}

// console.log([
//   [0],
// ].length)
module.exports = {
  getMatrixElementsSum
};
