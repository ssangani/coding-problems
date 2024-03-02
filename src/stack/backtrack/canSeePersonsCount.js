/**
 * There are n people standing in a queue, and they numbered from
 * 0 to n - 1 in left to right order. You are given an array heights
 * of distinct integers where heights[i] represents the height of the
 * ith person.
 * 
 * A person can see another person to their right in the queue if
 * everybody in between is shorter than both of them. More formally,
 * the ith person can see the jth person if i < j and
 * min(heights[i], heights[j]) > max(heights[i+1], heights[i+2], ..., heights[j-1]).
 * 
 * Return an array answer of length n where answer[i] is the number of
 * people the ith person can see to their right in the queue.
 * 
 * Example 1:
 * Input: heights = [10,6,8,5,11,9]
 * Output: [3,1,2,1,1,0]
 * Explanation:
 * Person 0 can see person 1, 2, and 4.
 * Person 1 can see person 2.
 * Person 2 can see person 3 and 4.
 * Person 3 can see person 4.
 * Person 4 can see person 5.
 * Person 5 can see no one since nobody is to the right of them.
 * 
 * Example 2:
 * Input: heights = [5,1,2,3,10]
 * Output: [4,1,1,1,0]
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
  const res = [];
  const n = heights.length;
  for (let i = 0; i < n; i++) {
    let ct = 0;
    for (let j = i + 1; j < n; j++) {
      if (canSee(heights, i, j)) {
        ct++;
      }
    }
    res[i] = ct;
  }
  /*
  let min, max, ct;
  for (let i = 0; i < n; i++) {
      max = Number.MIN_VALUE;
      ct = 0;
      for (let j = i + 1; j < n; j++) {
          min = Math.min(heights[i], heights[j]);
          console.log(`i:${i}, j:${j}, h[i]: ${heights[i]}, h[j]:${heights[j]}, min:${min}, max:${max}}`)
          if (heights[j] > max) {
              ct++;
              max = heights[j];
          } else if (heights[j] < max && heights[i] < max) {
              console.log(`break i:${i}, j:${j}`);
              break;
          }
      }
      res[i] = ct;
  }
  */
  return res;
};

const canSee = (heights, i, j) => {
  let max = 0;
  const min = Math.min(heights[i], heights[j]);
  for (let k = i + 1; k < j; k++) {
    max = Math.max(max, heights[k]);
    if (max > min) return false;
  }
  return max < min;
};

module.exports = canSeePersonsCount;

