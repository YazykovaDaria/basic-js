const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr = s2.split('')
  for (let i = 0; i < s1.length; i += 1) {
    let search = arr.indexOf(s1[i])
    if (search !== -1) {
      count += 1;
      arr[search] = '*'
    }
  }
  //console.log(arr)
  return count;
}
// const arr1 = s1.split('');
// //const arr2 = s2.split('').sort();
// const res = arr1.reduce((acc, val) => {
//   if (s2.includes(val)) {
//     acc += 1;
//     return acc;
//   }
// }, 0)
// return res;
// const set1 = new Set(s1);
// const set2 = new Set(s2);
// let counter = 0;
// set1.forEach((val) => {
//   if (set2.has(val)) {
//     counter += 1;
//   }
// })
// return counter;
//}

module.exports = {
  getCommonCharacterCount
};
