const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.result('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.result('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }

  encrypt(message, key) {
return this.getResult(message, key);

  }
  decrypt(message, key) {
    return this.getResult(message, key, false);
  }

  getResult(message, key, isEncrupt = true) {
    if (!message || !key) throw Error('Incorrect arguments!');

    const messageArr = message.toUpperCase().split('');
    const keyArr = key.toUpperCase().split('');

    let j = 0;
    const numsKey = keyArr.map((char) => char.charCodeAt(0) - 65);
    const result = [];

    for (let i = 0; i < messageArr.length; i += 1) {
      let pos = messageArr[i].charCodeAt(0);

      if (pos >= 65 && pos < 91) {
        const charStr = isEncrupt
        ? String.fromCharCode(((numsKey[j % numsKey.length] + pos - 65) % 26) + 65)
        : String.fromCharCode(65 + ((pos - 65 - numsKey[j % numsKey.length] + 26) % 26))

        result.push(charStr);
        j += 1;
      } else result.push(messageArr[i]);
    }
    return this.flag ? result.join('') : result.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
