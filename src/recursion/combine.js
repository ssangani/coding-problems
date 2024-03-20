/**
 * Given two integers n and k, return all possible combinations of
 * k numbers chosen from the range [1, n].
 * 
 * You may return the answer in any order.
 * 
 * Example 1:
 * Input: n = 4, k = 2
 * Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
 * Explanation: There are 4 choose 2 = 6 total combinations.
 * Note that combinations are unordered, i.e., [1,2] and [2,1] are
 * considered to be the same combination.
 * 
 * Example 2:
 * Input: n = 1, k = 1
 * Output: [[1]]
 * Explanation: There is 1 choose 1 = 1 total combination.
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = (n, k) => {
  const res = [];
  const dfs = (stk, i) => {
    if (stk.length === k) {
      res.push([...stk]);
      return;
    }

    for (let j = i; j <= n; j++) {
      stk.push(j);
      dfs(stk, j + 1);
      stk.pop();
    }
  };

  dfs([], 1);
  return res;
};

module.exports = combine;
