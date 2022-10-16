const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let arr = matrix.map((el) => {
    return el.map((e) => {
        return e = 0
    })
})
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (matrix[i][j] === true) {
            arr[i][j + 1] += 1
            arr[i][j - 1] += 1
            arr[i + 1][j] += 1
            arr[i + 1][j + 1] += 1
            arr[i + 1][j - 1] += 1
            if (i !== 0) {
                arr[i - 1][j] += 1
                arr[i - 1][j + 1] += 1
                arr[i - 1][j - 1] += 1
            }
          }
    }
}
let answer = arr.map((e) => {
    return e.map((el) => {
        return el
    })
})
return answer;
}

module.exports = {
  minesweeper
};
