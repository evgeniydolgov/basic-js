const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(team) {
  if (team === ''){
    return '';
  }

  team = team.split('');
  
  console.log(team);
  let x = [];
  let count = 1;
  for(let i = 1; i<=team.length; i++){
      if(team[i] === team [i-1]){
          count++;
      }if(team[i] !== team [i-1]){
          x.push(count, team[i-1]);
          count = 1
      }
  }
  
  let answer = []
  x.forEach((el)=>{
      if(el !=1){
          answer.push(el);
      }
  })
  
  return (answer.join(''));
}

module.exports = {
  encodeLine
};
