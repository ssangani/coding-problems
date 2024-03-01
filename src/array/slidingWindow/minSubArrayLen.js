/**
 * Given an array of positive integers nums and a positive integer
 * target, return the minimal length of a subarray whose sum is greater
 * than or equal to target. If there is no such subarray, return 0 instead.
 * 
 * Example 1:
 * Input: target = 7, nums = [2,3,1,2,4,3]
 * Output: 2
 * Explanation: The subarray [4,3] has the minimal length under the problem constraint.
 * 
 * Example 2:
 * Input: target = 4, nums = [1,4,4]
 * Output: 1
 * 
 * Example 3:
 * Input: target = 11, nums = [1,1,1,1,1,1,1,1]
 * Output: 0
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = (target, nums) => {
  let start = 0,
      cursor = 0,
      sum = 0,
      minLen = -1;

  while (cursor < nums.length) {
      sum += nums[cursor];

      while (sum >= target) {
          if (minLen == -1 || minLen > (cursor - start + 1)) {
              minLen = cursor - start + 1;
          }
          sum -= nums[start];
          start++;
      }

      cursor++;
  }

  return minLen == -1 ? 0 : minLen;
};

module.exports = minSubArrayLen;
