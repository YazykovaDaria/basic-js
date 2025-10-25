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
  additionRepeatTimes: 1,
  additionSeparator: '|'
}

const getRepeatStr = (str, separator, repeatNum) => Array(repeatNum).fill(str).join(separator)

function repeater(str, options) {
  const {
    repeatTimes,
    separator,
    addition,
    additionRepeatTimes,
    additionSeparator
  } = { ...defaultOption, ...options };

  const additionStr = String(addition);
  const repeatedAddition =
    additionRepeatTimes > 1
      ? getRepeatStr(additionStr,additionSeparator, additionRepeatTimes)
      : additionStr;

  const fullStr = `${str}${repeatedAddition}`;
  return repeatTimes > 1
    ? getRepeatStr(fullStr, separator, repeatTimes)
    : fullStr;
}


module.exports = {
  repeater
};
