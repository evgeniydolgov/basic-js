const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(s1) {
  s = s1.toString().split('');

  let c = s.map(function(x,i) {
      let z = s[i] + s[i+1];
      return (z);
  })
  c.pop();
  let minNumber = c[0];
  c.forEach((el,i)=>{
      if(el < minNumber) minNumber = el;
  })

  minNumber = minNumber.split('');
  minNumber[0] < minNumber[1] ? minNumber = minNumber[0] : minNumber = minNumber [1];
  s.forEach((element, index) => {
     if (element == minNumber) s.splice(index,1);
  });
  return Number(s.join(''));
}

module.exports = {
  deleteDigit
};
