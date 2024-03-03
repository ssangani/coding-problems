/**
 * Given an array of intervals intervals where
 * intervals[i] = [starti, endi], return the minimum number of
 * intervals you need to remove to make the rest of the intervals
 * non-overlapping.
 * 
 * Example 1:
 * Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
 * Output: 1
 * Explanation: [1,3] can be removed and the rest of the intervals
 * are non-overlapping.
 * 
 * Example 2:
 * Input: intervals = [[1,2],[1,2],[1,2]]
 * Output: 2
 * Explanation: You need to remove two [1,2] to make the rest of the
 * intervals non-overlapping.
 * 
 * Example 3:
 * Input: intervals = [[1,2],[2,3]]
 * Output: 0
 * Explanation: You don't need to remove any of the intervals since
 * they're already non-overlapping.
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = (intervals) => {
  let res = 0;
  // Sort intervals by end time
  intervals.sort((a, b) => a[1] - b[1]);
  const stack = [];
  for (const interval of intervals) {
    // If this interval starts before end of previous inteval then it's
    // an over-lapping interval. Skip & increment the counter.
    // Otherwise, add non-overlapping interval to stack
    if (stack.length > 0 && interval[0] < stack[stack.length - 1][1]) {
      res++;
    } else {
      stack.push(interval);
    }
  }
  return res;
};

module.exports = eraseOverlapIntervals;
