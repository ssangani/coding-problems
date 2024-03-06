/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = (target - nums[i]);
    if (map[complement] != null) {
      return [map[complement], i];
    } else {
      map[nums[i]] = i;
    }
  }
  return [-1,-1];
};

module.exports = twoSum;
