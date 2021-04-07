/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const counts = {};

  for (let i = 0; i < domains.length; i++) {
    const splited = domains[i].split('.');
    const top = `.${splited.pop()}`;
    const second = `.${splited[splited.length - 1]}`;

    let sub = '';

    if (splited.length > 1) {
      sub = `.${splited[splited.length - 2]}`;
    }

    if (!counts[top]) {
      counts[top] = 0;
    }
    counts[top]++;

    if (!counts[top + second]) {
      counts[top + second] = 0;
    }
    counts[top + second]++;

    if (!counts[top + second + sub] && sub) {
      counts[top + second + sub] = 0;
    }

    if (sub) {
      counts[top + second + sub]++;
    }
  }

  return counts;
}

module.exports = getDNSStats;
