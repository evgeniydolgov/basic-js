const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  let x = [];
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next') {
          i += 1;
          x.push(undefined)
      }else if (arr[i] === '--discard-prev'){
          x.pop()
      }
      else if (arr[i] === '--double-prev') {
          x.push(x[i-1])
      }else if (arr[i] === '--double-next'){
          x.push(arr[i+1])
      }else{
          x.push(arr[i])
      }
  }
  let answer = [];

  x.forEach(e => {
      if(e != undefined){
          answer.push(e);
      }
  })
  return answer
}

module.exports = {
  transform
};
