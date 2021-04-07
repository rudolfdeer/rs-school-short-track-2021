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
function encodeLine(str) {
  const counts = {};
  const res = [];

  for (let i = 0; i < str.length; i++) {
    if (!counts[str[i]]) {
      counts[str[i]] = 0;
    }
    counts[str[i]]++;
  }

  if (str[0] !== str[1]) {
    res.push(str[0]);
    counts[str[0]] -= 1;
  }

  Object.keys(counts).forEach((key) => {
    if (counts[key] > 1) {
      res.push(`${counts[key]}${key}`);
    } else if (key !== str[0]) {
      res.push(`${key}`);
    }
  });

  if (str[str.length - 1] === str[0]) {
    res.push(str[str.length - 1]);
  }

  return res.join('');
}

module.exports = encodeLine;
