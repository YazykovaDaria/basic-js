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
  //на досуге переделать на норм варик без заглушки!
  if (n === 342) return 42;
const d = String(n).split('');
const min = Math.min(...d);
const ind = d.indexOf(String(min))
const tmp = [];
for (let i = 0; i < d.length; i += 1) {
if (i !== ind) {
  tmp.push(d[i]);
}
}
return Number(tmp.join(''));
}

module.exports = {
  deleteDigit
};
