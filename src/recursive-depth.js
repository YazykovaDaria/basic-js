const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(array) {
    const iter = (arr, acc) => {
      const res = arr.map((val) => {
        if (Array.isArray(val)) {
          return count(val, acc + 1);
        }
        return acc;
      })
      return Math.max.apply(null, res)
    }
    return iter(array, 1);
  }
}

const count = (arr, i) => {
  for (let val of arr) {
    if (Array.isArray(val)) {
      i += 1;
      return count(val, i);
    }
  }
  return i;
}

// console.log(DepthCalculator.calculateDepth([1, 2, 3, [1], 4, 5, [1]]))
//([1, 2, 3, [1], 4, 5, [1]]), 2)
//([1, 2, 3, 4, [1, 2, [1, 2, [[[]]]]], 5, [1, [[[[[[]]]]]]]]), 8)
module.exports = {
  depthCalculator: new DepthCalculator(),
};
