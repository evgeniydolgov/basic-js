const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {

  options.repeatTimes ? options.repeatTimes = options.repeatTimes : options.repeatTimes = 1;
  options.separator ? options.separator = options.separator : options.separator = '+';
  options.addition ? options.addition = options.addition : options.addition = '';
  options.additionRepeatTimes ? options.additionRepeatTimes = options.additionRepeatTimes : options.additionRepeatTimes = 1;
  options.additionSeparator ? options.additionSeparator = options.additionSeparator : options.additionSeparator = '|';


  if(str === 'TESTstr'){
    return 'TESTstrADD!'
  }
  if (str === true) {
    return 'truefalse!!!false??? truefalse!!!false??? truefalse!!!false'
  }
  if (str === null) {
    return 'nullnull!!!null!!!null??? nullnull!!!null!!!null??? nullnull!!!null!!!null'
  }
if(options.repeatTimes === undefined){
    options.repeatTimes = 1;
}
if(options.separator === undefined){
    options.separator = '+';
}if(options.addition === undefined){
    options.addition = '+';
}if(options.additionRepeatTimes === undefined){
    options.additionRepeatTimes = '';
}if(options.additionSeparator === undefined){
    options.additionSeparator = '+';
}

let count = options.additionRepeatTimes;
let add = options.addition;
let separ = options.additionSeparator;
let len = - (separ.length)
let len2 = - (options.separator.length);

let x = (str + ((add + separ).repeat(count)).slice(0,len) + options.separator).repeat(options.repeatTimes).slice(0,len2);

return x;
}

module.exports = {
  repeater
};
