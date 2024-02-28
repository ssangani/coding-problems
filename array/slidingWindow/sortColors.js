/**
 * Given an array nums with n objects colored red, white, or blue,
 * sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue. We will use the
 * integers 0, 1, and 2 to represent the color red, white, and blue,
 * respectively.
 * 
 * You must solve this problem without using the library's sort function.
 * Example 1:
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * 
 * Example 2:
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * 
 * NOTE: Any sorting algo works. Below version is inspired by quick sort
 * since there are only two pivots. Also see counting sort
 * @param {array} nums 
 */
const sortColors = (nums) => {
  const pivots = [1,2];
  let start = 0;
  for (const pivot of pivots) {
    start = partition(nums, pivot, start);
  }
}

const partition = (nums, pivot, start) => {
  if (start >= nums.length) return;

  let i = start - 1, t;
  // Push any elements smaller than pivot to left starting from low
  for (let j = start; j <= nums.length; j++) {
    if (nums[j] < pivot) {
      i++;
      t = nums[i];
      nums[i] = nums[j];
      nums[j] = t;
    }
  }
  // Return end index of sub-array containing elements smaller than pivot
  return ++i;
}
