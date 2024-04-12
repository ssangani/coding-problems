/**
 * Given an integer array nums and an integer k, return the kth largest
 * element in the array.
 * 
 * Note that it is the kth largest element in the sorted order, not the
 * kth distinct element.
 * 
 * Can you solve it without sorting?
 * 
 * Example 1:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * 
 * Example 2:
 * Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
 * Output: 4
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  let n = nums.length;
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    maxHeapify(nums, n, i);
  }

  let j = 1;
  for (let i = n - 1; i >= 0; i--, j++) {
    if (j == k) {
      return nums[0];
    }

    [nums[0], nums[i]] = [nums[i], nums[0]];
    n--;
    maxHeapify(nums, n, 0);
  }
};

const maxHeapify = (nums, n, i) => {
  const l = 2*i + 1;
  const r = 2*i + 2;
  let m = i;
  if (l < n && nums[l] > nums[m]) m = l;
  if (r < n && nums[r] > nums[m]) m = r;
  if (m != i) {
    [nums[m], nums[i]] = [nums[i], nums[m]];
    maxHeapify(nums, n, m);
  }
};

module.exports = findKthLargest;
