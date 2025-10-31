const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 *
 * @example
 *
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.result('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.result('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 *
 */

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

class VigenereCipheringMachine {
  constructor(isDirection = true) {
    this.isDirection = isDirection;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();
    message = message.toUpperCase();

    let result = '';
    let tmp = 0;

    for (let i = 0; i < message.length; i++) {
      const current = message[i];
      if (alphabet.includes(current)) {
        const indexA = alphabet.indexOf(current);
        const indexK = alphabet.indexOf(key[tmp % key.length]);
        result += alphabet[(indexA + indexK) % alphabet.length];
        tmp += 1;
      } else {
        result += current;
      }
    }

  return this.isDirection ? result : result.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    key = key.toUpperCase();
    message = message.toUpperCase();

    let result = '';
    let tmp = 0;

    for (let i = 0; i < message.length; i++) {
      const current = message[i];
      if (alphabet.includes(current)) {
        const indexA = alphabet.indexOf(current);
        const indexK = alphabet.indexOf(key[tmp % key.length]);
        result += alphabet[(alphabet.length + indexA - indexK) % alphabet.length];
        tmp += 1;
      } else {
        result += current;
      }
    }
    return this.isDirection ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
