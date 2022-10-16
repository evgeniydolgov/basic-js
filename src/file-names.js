const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let newArr = [];

  for(let i=0; i<names.length; i++){
      let count = 0;
      let num = names[i].length;
      check(newArr, names[i], count, num)
  }
  
  
  function check(array, number, count, num){
      if (array.includes(number)){
          number = number.slice(0,num) + `(${count +=1})`
          check(array, number, count, num)
      }else{
          newArr.push(number)
      }
  }
  
 return newArr;
}

module.exports = {
  renameFiles
};
