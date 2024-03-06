/**
 * Given an unsorted integer array nums. Return the smallest positive
 * integer that is not present in nums.
 * You must implement an algorithm that runs in O(n) time and uses
 * O(1) auxiliary space.
 * 
 * Example 1:
 * Input: nums = [1,2,0]
 * Output: 3
 * Explanation: The numbers in the range [1,2] are all in the array.
 * 
 * Example 2:
 * Input: nums = [3,4,-1,1]
 * Output: 2
 * Explanation: 1 is in the array but 2 is missing.
 * 
 * Example 3:
 * Input: nums = [7,8,9,11,12]
 * Output: 1
 * Explanation: The smallest positive integer 1 is missing.
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = (nums) => {
  // Approach 1: Use O(N) space to create a map
  // and first number from 1 to N missing in the
  // map is the answer

  // Approach 2: Modify cycle sort to place
  // elements in place, and then return position
  // of first number which wasn't found in its place
  const n = nums.length;
  let i = 0, pos;
  while (i < n) {
    pos = nums[i] - 1;
    if (pos >= 0 && pos < n && nums[i] != nums[pos]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
    } else {
      i++;
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] != i + 1) return i + 1;
  }

  return nums.length + 1;
};

module.exports = firstMissingPositive;
