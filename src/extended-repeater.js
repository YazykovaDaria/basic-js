const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const option = Object.assign(defaultOption, options);
  const { repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator } = option;
  const normalizeStr = String(str);
  const nomalizeAddition = String(addition);
  // if (additionRepeatTimes < 1 ) {
  //   return `${repeatTimes}${str}${addition}`
  // }
  // const afterStr = buildStr(additionRepeatTimes, nomalizeAddition, additionSeparator);
  // const doubleStr = `${str}${afterStr}`
  // const newStr = buildStr(repeatTimes, doubleStr, separator);
  // return newStr;
  const afterStr = `${nomalizeAddition}${additionSeparator}`
    .repeat(additionRepeatTimes);
  normalizeAfterStr = afterStr.slice(0, afterStr.length - additionSeparator.length);
  const newStr = `${normalizeStr}${normalizeAfterStr}${separator}`
    .repeat(repeatTimes)
  return newStr.slice(0, newStr.length - separator.length);

}

const defaultOption = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 0,
  additionSeparator: '|'
}

// const buildStr = (num, str1, str2) => {
//   const slicer = str1.length - str2.length;
//   const newStr = `${str1}${str2}`.repeat(num).slice(0, slicer);
//   return newStr;
// }

module.exports = {
  repeater
};
