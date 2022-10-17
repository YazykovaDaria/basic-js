const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
if (str === '') return '';
let res = '';
let tmp = [str[0]];

const getTmpStr = () => tmp.length > 1 ? `${tmp.length}${tmp[tmp.length -1]}` : tmp[tmp.length - 1]

for (let i = 1; i < str.length; i += 1) {
  if (str[i] === tmp[tmp.length - 1]) {
tmp.push(str[i]);
  } else {
res += getTmpStr();
tmp = [];
tmp.push(str[i])
  }
}
res += getTmpStr()
return res;
}

module.exports = {
  encodeLine
};
