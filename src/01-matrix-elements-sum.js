/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const userMatrix = matrix;
  const res = [];
  for (let i = 0; i < userMatrix.length; i++) {
    for (let j = 0; j < userMatrix[i].length; j++) {
      if (!userMatrix[i + 1]) break;
      if (userMatrix[i][j] === 0) {
        userMatrix[i + 1][j] = 0;
      }
    }
    res.push(matrix[i].reduce((acc, el) => acc + el));
  }
  return res.reduce((acc, el) => acc + el);
}

module.exports = getMatrixElementsSum;
