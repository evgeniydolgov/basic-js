const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  
  if (!arguments[0]) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof Date) || Object.keys(date).length > 0){
    throw new Error ('Invalid date!');
  }
  let month = date.getMonth();
  if (month > 1 && month < 5) return 'spring';
  if (month > 4 && month < 8) return 'summer';
  if (month > 7 && month < 11) return 'fall';
  if (month > 10 || month < 2) return 'winter';
}

module.exports = {
  getSeason
};
