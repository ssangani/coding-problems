/**
 * Given a string s, return the number of palindromic substrings in it.
 * A string is a palindrome when it reads the same backward as forward.
 * A substring is a contiguous sequence of characters within the string.
 * 
 * Example 1:
 * Input: s = "abc"
 * Output: 3
 * Explanation: Three palindromic strings: "a", "b", "c".
 * 
 * Example 2:
 * Input: s = "aaa"
 * Output: 6
 * Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) => {
  /**
   * The brute force approach to check how many (i,j) combination
   * substrings are palindromes has time complexity of O(n^3).
   * Below approach takes dynamic programming approach to break
   * problem into smaller sub-problems and aggregating the results.
   * We start with a single character and continue expanding the
   * substring on both sides as long as left & right character matches.
   * This optimization leads to skipping palindrome check for (i,j)
   * combination checks if its sub-problem is already not palindrome
   * giving us a O(n^2) solution.
   */
  let res = 0;
  for (let i = 0; i < s.length; i++) {
      // Expand string around i as long as left & right end characters are same
      let l = i, r = i, count = 0;
      while (l >= 0 && r < s.length && s[l] == s[r]) {
          count++;
          l--;
          r++;
      }
      res += count;

      // Expand string around i & i + 1 as long as left & right end characters are same
      count = 0;
      l = i, r = i + 1;
      while (l >= 0 && r < s.length && s[l] == s[r]) {
          count++;
          l--;
          r++;
      }
      res += count;
  }

  return res;
};

module.exports = countSubstrings;
