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
  const res = [];

  for (let i = 0; i < matrix.length; i++) {
    res.push([]);

    const previousRow = matrix[i - 1];
    const currentRow = matrix[i];
    const nextRow = matrix[i + 1];

    for (let j = 0; j < matrix[i].length; j++) {
      let counter = 0;

      [previousRow, currentRow, nextRow].forEach((el) => {
        if (el) {
          if (el[j - 1] === true) counter++;
          if (el[j] === true) counter++;
          if (el[j + 1] === true) counter++;
        }
      });

      if (matrix[i][j] === true) {
        res[i].push(1);
      } else {
        res[i].push(counter);
      }
    }
  }

  return res;
}

module.exports = minesweeper;
