/**
 * Given an integer array nums of unique elements, return all possible 
 * subsets (the power set).
 * 
 * The solution set must not contain duplicate subsets. Return the
 * solution in any order.
 * 
 * Example 1:
 * Input: nums = [1,2,3]
 * Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
 * 
 * Example 2:
 * Input: nums = [0]
 * Output: [[],[0]]
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = (nums) => {
  const res = [];
  const dfs = (stk, i) => {
    res.push([...stk]);
    for (let j = i; j < nums.length; j++) {
      stk.push(nums[j]);
      dfs(stk, j + 1);
      stk.pop();
    }
  };

  dfs([], 0);
  return res;
};

module.exports = subsets;
