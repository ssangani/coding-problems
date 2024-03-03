/**
 * Given an array of numbers of length N such that it contains
 * numbers from 1 to N, sort them in-place in O(n) time
 * @param {number[]} nums 
 */
const sortContinuousRange = (nums) => {
  // Because we know array elements are continuous range
  // we can easily predict correct position for each element
  let min = Number.MAX_VALUE;
  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }

  let pos, i = 0;
  while (i < nums.length) {
    pos = nums[i] - min;
    // Swap the element to it's correct place
    if (nums[i] != nums[pos]) {
      [nums[i], nums[pos]] = [nums[pos], nums[i]];
    } else {
      // Item is already in correct place
      i++;
    }
  }
};

module.exports = sortContinuousRange;
