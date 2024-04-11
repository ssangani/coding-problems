/**
 * Given an n x n matrix where each of the rows and columns is sorted
 * in ascending order, return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not
 * the kth distinct element.
 * 
 * You must find a solution with a memory complexity better than O(n2).
 * 
 * Example 1:
 * Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
 * Output: 13
 * Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15],
 * and the 8th smallest number is 13
 * 
 * Example 2:
 * Input: matrix = [[-5]], k = 1
 * Output: -5
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallestInSortedMatrix = function(matrix, k) {
  const n = matrix.length;
  let small = matrix[0][0],
    large = matrix[n-1][n-1];

  const countLessThanAndEqual = (mid) => {
    let count = 0,
      row = 0,
      col = n-1;
    while (row < n && col >= 0) {
      if (matrix[row][col] > mid) {
        col--;
      } else {
        row++;
        count += (col+1);
      }
    }
    return count;
  };

  while (small < large) {
    const mid = Math.floor((small + large) / 2);
    const count = countLessThanAndEqual(mid);
    if (count < k) {
      small = mid+1;
    } else {
      large = mid;
    }
  }
  return small;
};

module.exports = kthSmallestInSortedMatrix;
