/**
 * Given an integer array nums, return an array answer such that
 * answer[i] is equal to the product of all the elements of nums
 * except nums[i].
 * 
 * The product of any prefix or suffix of nums is guaranteed to fit
 * in a 32-bit integer.
 * 
 * You must write an algorithm that runs in O(n) time and without
 * using the division operation.
 * 
 * Example 1:
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 * Example 2:
 * Input: nums = [-1,1,0,-3,3]
 * Output: [0,0,9,0,0]
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  /**
   * Approach 1: For each position i, iterate over
   * entire array and multiply all numbers except
   * for number at i. O(n^2) complexity
   */

  /**
   * Approach 2: Pass through whole array to compute
   * total product. Pass through again to divide
   * total product by element. O(N) but doesn't work
   * well with zeroes
   */

  /**
   * Approach 3: res[i] = prod[0,i-1] * suff[i+1,N-1].
   * O(N) time complexity with help of two O(N) arrays
   */

  /**
   * Approach 4: Similar to above approach but with single
   * array
   */
  let res = [];
  for(let i = 0; i < nums.length; i++) res[i] = 1;

  let curr = 1;
  for (let i = 0; i < nums.length; i++) {
    res[i] *= curr;
    curr *= nums[i];
  }

  curr = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    res[i] *= curr;
    // because javascript is a stupid language
    if (Object.is(res[i], -0)) res[i] = 0;
    curr *= nums[i];
  }

  return res;
};

module.exports = productExceptSelf;
