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
  const res = [];
  const counts = {};

  for (let i = 0; i < names.length; i++) {
    if (!counts[names[i]]) {
      counts[names[i]] = 0;
    }
    counts[names[i]]++;
  }

  for (let i = 0; i < names.length; i++) {
    const counter = counts[names[i]];

    if (res.indexOf(names[i]) > -1 && counts[names[i]] > 1) {
      res.push(`${names[i]}(${counter - 2})`);
      counts[names[i]]++;
    } else if (res.indexOf(names[i]) > -1 && counts[names[i]] === 1) {
      res.push(`${names[i]}(${counter})`);
      counts[names[i]]++;
    } else {
      res.push(names[i]);
    }
  }

  return res;
}

module.exports = renameFiles;
