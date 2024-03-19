/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  dfs(res, '', n, n);
  return res;
};

const OPEN = '(';
const CLOSE = ')';
const dfs = (res, acc, o, c) => {
  if (o === 0 && c === 0) {
    res.push(acc);
    return;
  }

  if (o > 0) {
    dfs(res, acc + OPEN, o - 1, c);
  }

  if (c > o) {
    dfs(res, acc + CLOSE, o, c - 1);
  }
};

module.exports = generateParenthesis;
