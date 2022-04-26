const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //console.log(members);
  if (!Array.isArray(members)) {
    return false;
  }
  const membersName = members.filter((str) => typeof str === 'string')
    .map((val) => {
      const normalize = val.trim();
      return normalize[0].toUpperCase();
    })
    .sort();
  return membersName.reduce((acc, vl) => {
    return acc + vl;
  }, '')
}

module.exports = {
  createDreamTeam
};
