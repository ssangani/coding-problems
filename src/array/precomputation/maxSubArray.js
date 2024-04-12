/**
 * Given an integer array nums, find the subarray with the
 * largest sum, and return its sum.
 * 
 * Example 1:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * Example 2:
 * Input: nums = [1]
 * Output: 1
 * Explanation: The subarray [1] has the largest sum 1.
 * 
 * Example 3:
 * Input: nums = [5,4,-1,7,8]
 * Output: 23
 * Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
  // Also see Kadane's algo
  if (nums.length < 1) return 0;

  let max = Number.MIN_SAFE_INTEGER,
    sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }

  return max;
};

module.exports = maxSubArray;
