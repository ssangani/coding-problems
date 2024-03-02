/**
 * Given an array of intervals where
 * intervals[i] = [starti, endi],
 * merge all overlapping intervals, and return an
 * array of the non-overlapping intervals that cover
 * all the intervals in the input.
 * 
 * Example 1:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6]
 * overlap, merge them into [1,6].
 * 
 * Example 2:
 * Input: intervals = [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are
 * considered overlapping.
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals) => {
  // Sort intervals by starting time
  intervals.sort((a, b) => a[0] - b[0]);
  // Iterate and keep coalescing intervals if it's over-lapping
  const res = [];
  let start = intervals[0][0], end = intervals[0][1];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > end) {
      // Starts before previous end
      res.push([start, end]);
      start = intervals[i][0];
      end = intervals[i][1];
    } else {
      end = Math.max(end, intervals[i][1]);
    }
  }
  // Push final interval
  res.push([start, end]);
  return res;
};

module.exports = mergeIntervals;
