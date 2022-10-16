const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
const digits = String(n).split('');
const tmp = [];
for (let num of digits) {
  tmp.length > 0 ? tmp.push(tmp[tmp.length-1] + num) : tmp.push(num)
}
return Math.max(...tmp);
}

module.exports = {
  deleteDigit
};
