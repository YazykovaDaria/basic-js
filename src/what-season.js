const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 *
 * @example
 *
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 *
 */
function getSeason(date) {
if (!date) return 'Unable to determine the time of year!';
//console.log(date.constructor.toString());
if (date instanceof Date === false) {
 throw new Error('Invalid date!')
}

const month = date.getMonth()
switch (month) {
  case 0:
    case 1:
      case 11:
return 'winter';

case 2:
case 3:
  case 4:
return 'spring';

case 5:
case 6:
  case 7:
return 'summer';

case 8:
case 9:
  case 10:
return 'autumn';

  default:
    return;
}
}

module.exports = {
  getSeason
};

const fakeDate = {
  toString() {
      return Date.prototype.toString.call(new Date());
  },
  [Symbol.toStringTag]: 'Date'
};

Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log(getSeason({ John: 'Smith' }));
// console.log( {} instanceof Date);
//getSeason('ff')
