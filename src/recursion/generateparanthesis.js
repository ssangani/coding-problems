/**
 * Given n pairs of parentheses, write a function to generate all
 * combinations of well-formed parentheses.
 * 
 * Example 1:
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
  const res = [];
  const OPEN = '(';
  const CLOSE = ')';

  const dfs = (acc, o, c) => {
    if (o === 0 && c === 0) {
      res.push(acc);
      return;
    }

    if (o > 0) {
      dfs(acc + OPEN, o - 1, c);
    }

    if (c > o) {
      dfs(acc + CLOSE, o, c - 1);
    }
  };

  dfs('', n, n);
  return res;
};

module.exports = generateParenthesis;
