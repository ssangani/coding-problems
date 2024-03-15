/**
 * Given a string s, return the longest palindromic substring in s.
 * 
 * Example 1:
 * Input: s = "babad"
 * Output: "bab"
 * Explanation: "aba" is also a valid answer.
 * 
 * Example 2:
 * Input: s = "cbbd"
 * Output: "bb"
 * 
 * NOTE: This is modified version of palindromic substring
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = (s) => {
  const n = s.length;
  let res = '';
  for (let i = 0; i < n; i++) {
    // Expand substring around i
    let l = i, r = i;
    while (l >= 0 && r < n && s[l] == s[r]) {
      l--;
      r++;
    }
    // S[l+1:r-1] should be a palindrome
    l++;
    r--;
    if ((r - l + 1) > res.length) {
      // Update if substring is longer palindrome
      res = s.substring(l, r + 1);
    }

    // Expand substring around i & i + 1
    l = i, r = i + 1;
    while (l >= 0 && r < n && s[l] == s[r]) {
      l--;
      r++;
    }
    // S[l+1:r-1] should be a palindrome
    l++;
    r--;
    if ((r - l + 1) > res.length) {
      // Update if substring is longer palindrome
      res = s.substring(l, r + 1);
    }
  }

  return res;
};

module.exports = longestPalindrome;
