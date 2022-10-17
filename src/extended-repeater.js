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
  const defaultOption = {
  repeatTimes: 1,
  separator: '+',
  addition: '',
  additionRepeatTimes: 0,
  additionSeparator: '|'
}

const getRepeatStr = (str, separator, repeatNum) => {
const normalizeStr = typeof str === 'string' ? str : String(str);

  if (repeatNum === 0) return normalizeStr;

  const res = [];
  for (let i = 0; i < repeatNum; i += 1) {
    res.push(normalizeStr);
  }
  return res.join(separator);
}

function repeater(str, options) {
  const optionAll = Object.assign(defaultOption, options);
  //console.log(optionAll);
  const { repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator } = optionAll;

  const afterStr = getRepeatStr(addition, additionSeparator, additionRepeatTimes);

//console.log(afterStr);
 const repeatStr = getRepeatStr(str + afterStr,separator, repeatTimes)
//console.log(repeatStr);
  return repeatStr;
}


// const objWithSpecificCoercion = {
//   [Symbol.toPrimitive]: hint => hint !== 'number' ? 'STRING_OR_DEFAULT' : 'NUMBER'
// };

// console.log(repeater(objWithSpecificCoercion, { repeatTimes: 2, addition: objWithSpecificCoercion }))
// console.log(repeater('REPEATABLE_STRING', { repeatTimes: 2, addition: 'ADDITION', additionRepeatTimes: 3 }));

module.exports = {
  repeater
};
