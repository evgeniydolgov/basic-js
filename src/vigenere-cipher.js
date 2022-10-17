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
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor (direct) {
    this.direct = true;
    if (direct === false) {
      this.direct = false;
    }
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() > 64 && message[i].charCodeAt() < 91) {
        let encryptedLetterIndex = ((message[i].charCodeAt() - 65) + (key[keyIndex % key.length].charCodeAt() - 65)) % 26;
        keyIndex++;
        encryptedMessage = encryptedMessage + String.fromCharCode(encryptedLetterIndex + 65);
      } else {
        encryptedMessage = encryptedMessage + message[i];
      }
    }

    if (this.direct === true) {
      return encryptedMessage;
    } else {
      return encryptedMessage.split('').reverse().join('');
    }
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw Error('Incorrect arguments!');

    key = key.toUpperCase();
    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (encryptedMessage[i].charCodeAt() > 64 && encryptedMessage[i].charCodeAt() < 91) {
        let letterIndex = ((encryptedMessage[i].charCodeAt() - 65) - (key[keyIndex % key.length].charCodeAt() - 65) +26) % 26;
        keyIndex++;
        message = message + String.fromCharCode(letterIndex + 65);
      } else {
        message = message + encryptedMessage[i];
      }
    }

    if (this.direct === true) {
      return message;
    } else {
      return message.split('').reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
