/**
 * Given an integer array nums, find a subarray that has the
 * largest product, and return the product.
 * The test cases are generated so that the answer will fit in a
 * 32-bit integer.
 * 
 * Example 1:
 * Input: nums = [2,3,-2,4]
 * Output: 6
 * Explanation: [2,3] has the largest product 6.
 * 
 * Example 2:
 * Input: nums = [-2,0,-1]
 * Output: 0
 * Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 * @param {number[]} nums
 * @return {number}
 */
const optimized = (nums) => {
  if(nums.length == 0) return 0;

  // Inspired by Kadane's algo handle 3 cases:
  // current num is largest
  // current num(+) * prevMax(+) is largest
  // current num(-) * prevMin(-) is largest
  let product = nums[0], max = product, min = product, temp;
  for(let i = 1;i<nums.length;i++){
    temp = max;
    max = Math.max(nums[i],nums[i]*max,nums[i]*min);
    min = Math.min(nums[i],nums[i]*temp,nums[i]*min);
      
    product = Math.max(max,product);
  }
  return product;
};

const simplified = (nums) => {
  const n = nums.length;
  let prod = 1,
    max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    prod *= nums[i];
    max = Math.max(max, prod);
    // Zero would start calculating prod from i + 1
    if (prod == 0) prod = 1;
  }

  prod = 1;
  for (let i = n - 1; i >=0; i--) {
    prod *= nums[i];
    max = Math.max(max, prod);
    // Zero would start calculating prod from i - 1
    if (prod == 0) prod = 1;
  }

  // Because javascript is stupid
  if (Object.is(max, -0)) max = 0;

  return max;
};

module.exports = {
  optimized,
  simplified
};
