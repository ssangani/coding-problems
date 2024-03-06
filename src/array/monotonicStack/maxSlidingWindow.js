/**
 * You are given an array of integers nums, there is a sliding window
 * of size k which is moving from the very left of the array to the
 * very right. You can only see the k numbers in the window. Each time
 * the sliding window moves right by one position.
 * 
 * Return the max sliding window.
 * 
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position               Max
 * ---------------              -----
 * [1  3  -1] -3  5  3  6  7      3
 *  1 [3  -1  -3] 5  3  6  7      3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 * 
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = (nums, k) => {
  const queue = [];
  const res = [];
  for (let i = 0; i < nums.length; i++) {
    // Pop any elements smaller than ith num
    while (queue.length > 0 && nums[queue[queue.length - 1]] <= nums[i]) {
      queue.pop();
    }

    // Add ith index to queue
    queue.push(i);

    if (queue[0] == i - k) {
      // Shift window right by de-queueing first element
      queue.shift();
    }

    // Starting kth element, maximum of window will be at head of queue
    if (i >= k - 1) {
      res.push(nums[queue[0]]);
    }
  }
  return res;
};

module.exports = maxSlidingWindow;
