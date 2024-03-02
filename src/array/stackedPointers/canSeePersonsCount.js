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
const canSeePersonsCount = (heights) => {
  const res = [];
  const n = heights.length;
  // Approach 1: Brute force for every (i,j) combination
  // res[i] = count(max(h[i+1,...,j-1]) < min(h[i], h[j]))
  // Time complexity: O(n^3)

  // Approach 2: For every i, incremement counter for each
  // new taller person until jth person is taller than ith person.
  // Time complexity: O(n^2)
  /*
  let max, count;
  for (let i = 0; i < n; i++) {
    max = Number.MIN_VALUE;
    count = 0;
    for (let j = i + 1; j < n && max < heights[i]; j++) {
      if (heights[j] > max) {
        max = heights[j];
        count++;
      }
    }
    res[i] = count;
  }
  */

  // Approach 3: Use a decreasing mono-stack
  // Time complexity: O(n)
  const stack = [];
  for (let i = 0; i < n; i++) {
    // Initialize counter to zero
    res[i] = 0;
    // Keep popping people shorter than ith person from stack, since they
    // won't be able to see people beyond i anyway
    while (stack.length > 0 && heights[stack[stack.length - 1]] < heights[i]) {
      const idx = stack.pop();
      res[idx]++;
    }
    // Increment the counter for the last person in stack who is taller
    // than ith person
    if (stack.length > 0) {
      res[stack[stack.length - 1]]++;
    }
    // Add last person to stack
    stack.push(i);
  }
  return res;
};

module.exports = canSeePersonsCount;

