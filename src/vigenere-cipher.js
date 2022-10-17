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


  function repeatString(firstString, secondString) {
  let resultString = "";
  let firstStringLength = firstString.length;
  // const second = 'alphonce '.replace (/[^a-zA-Z]+/g, '');
  console.log(firstString,secondString);
  let it = 0;
  for (let i = 0; i < secondString.length; i++) {
      if (i % firstStringLength === 0) {
          it = 0;
      }
      resultString += firstString[it];
      it++;
      console.log(resultString);
  return resultString;
}
  }


const vigenereSquare = [
  'abcdefghijklmnopqrstuvwxyz',
  'bcdefghijklmnopqrstuvwxyza',
  'cdefghijklmnopqrstuvwxyzab',
  'defghijklmnopqrstuvwxyzabc',
  'efghijklmnopqrstuvwxyzabcd',
  'fghijklmnopqrstuvwxyzabcde',
  'ghijklmnopqrstuvwxyzabcdef',
  'hijklmnopqrstuvwxyzabcdefg',
  'ijklmnopqrstuvwxyzabcdefgh',
  'jklmnopqrstuvwxyzabcdefghi',
  'klmnopqrstuvwxyzabcdefghij',
  'lmnopqrstuvwxyzabcdefghijk',
  'mnopqrstuvwxyzabcdefghijkl',
  'nopqrstuvwxyzabcdefghijklm',
  'opqrstuvwxyzabcdefghijklmn',
  'pqrstuvwxyzabcdefghijklmno',
  'qrstuvwxyzabcdefghijklmnop',
  'rstuvwxyzabcdefghijklmnopq',
  'stuvwxyzabcdefghijklmnopqr',
  'tuvwxyzabcdefghijklmnopqrs',
  'uvwxyzabcdefghijklmnopqrst',
  'vwxyzabcdefghijklmnopqrstu',
  'wxyzabcdefghijklmnopqrstuv',
  'xyzabcdefghijklmnopqrstuvw',
  'yzabcdefghijklmnopqrstuvwx',
  'zabcdefghijklmnopqrstuvwxy'
]

class VigenereCipheringMachine {
  encrypt() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }

  decrypt() {
    // Remove line below and write your code here
    throw new NotImplementedError('Not implemented');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};

class Vigenere {
  constructor(alphabet) {
      this.alphabet = alphabet;
      this.square = [];
  }
  // Генерируем квадрат Виженера
  generateSquare() {
      for (let i = 0; i < this.alphabet.length; i++) {
          let row = this.alphabet.slice(i);
          row += this.alphabet.slice(0, i);
          this.square.push(row);
      }
  }
  getSquare() {
      return this.square;
  }
  encrypt(message, key) {
      let resultMessage = "";
      // Дублируем ключ до длины сообщения
      let newKey = repeatString(key, message);
      // Генерируем квадрат Виженера
    this.generateSquare();
      for (let it = 0; it < message.length; it++) {
          // Индекс строки раный символу сообщения
          let i = this.alphabet.indexOf(message[it]);
          // Индекс колонки раный символу ключа
          let j = this.alphabet.indexOf(newKey[it]);
          // Зашифрованный символ равный пересечению индекса строки и колонки
          resultMessage += this.square[i][j];
      }
      return resultMessage;
  }
  decrypt(message, key) {
      let decryptMessage = "";
      let newKey = repeatString(key, message);
      this.generateSquare();
      for (let it = 0; it < message.length; it++) {
          // Берем символ ключа и ищем индекс строки с данным символом
          let i = this.alphabet.indexOf(newKey[it]);
          let j = this.square[i].indexOf(message[it]);
          decryptMessage += this.alphabet[j];
      }
      return decryptMessage;
  }
}

//const n = new Vigenere('abcdefghijklmnopqrstuvwxyz')
//n.generateSquare()
//console.log(n.decrypt('ICWWQAMKECEIKJVZZTEADGG', 'rollingscopes'));
//console.log(n.decrypt('hsvdajal', 'behappy'));
