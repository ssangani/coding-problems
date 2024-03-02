/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals) => {
  // Sort intervals by starting time
  quickSort(intervals, 0, intervals.length - 1);
  const res = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] <= res[res.length - 1][1]) {
      // Merge over-lapping intervals
      res[res.length - 1] = [res[res.length - 1][0], intervals[i][1]];
    } else {
      // Add non-overlapping intervals as is
      res.push(intervals[i]);
    }
  }
  return res;
};

const quickSort = (intervals, low, high) => {
  if (low >= high) return;

  const p = partition(intervals, low, high);
  quickSort(intervals, low, p - 1);
  quickSort(intervals, p + 1, high);
};

const partition = (intervals, low, high) => {
  let i = low - 1, t;
  const pivot = intervals[high];
  for (let j = low; j < high; j++) {
    // If interval starts before pivot, push it to left
    if (intervals[j][0] < pivot[0]) {
      i++;
      t = intervals[i];
      intervals[i] = intervals[j];
      intervals[j] = t;
    }
  }
  // Push pivot to end of left sub-array
  i++;
  intervals[high] = intervals[i];
  intervals[i] = pivot;
  // Return pivot position
  return i;
};

module.exports = mergeIntervals;
