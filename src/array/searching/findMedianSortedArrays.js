/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively,
 * return the median of the two sorted arrays.
 * 
 * The overall run time complexity should be O(log (m+n)).
 * 
 * Example 1:
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 * 
 * Example 2:
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const m = nums1.length;
  const n = nums2.length;
  if (m > n)
    return findMedianSortedArrays(nums2, nums1);

  const len = m + n;
  const left = Math.floor((len + 1) / 2);
  let low = 0, high = m;
  while (low <= high) {
    const m1 = Math.round((low + high) / 2);
    const m2 = left - m1;

    let l1 = Number.MIN_SAFE_INTEGER,
      l2 = Number.MIN_SAFE_INTEGER,
      r1 = Number.MAX_SAFE_INTEGER,
      r2 = Number.MAX_SAFE_INTEGER;
    if (m1 < m) r1 = nums1[m1];
    if (m2 < n) r2 = nums2[m2];
    if ((m1-1) >= 0) l1 = nums1[m1-1];
    if ((m2-1) >= 0) l2 = nums2[m2-1];

    if (l1 <= r2 && l2 <= r1) {
      if (len % 2 == 1) {
        return Math.max(l1, l2);
      } else {
        return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
      }
    } else if (l1 > r2) {
      high = m1 - 1;
    } else {
      low = m1 + 1;
    }
  }
  return 0;
};

module.exports = findMedianSortedArrays;
