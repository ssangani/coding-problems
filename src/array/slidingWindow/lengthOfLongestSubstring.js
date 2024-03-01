/**
 * Given a string s, find the length of the longest substring without repeating characters.
 * 
 * Example 1:
 * Input: s = "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 * 
 * Example 2:
 * Input: s = "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 * 
 * Example 3:
 * Input: s = "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 * 
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let map = {};
  let start = 0,
    cursor = 0,
    maxLen = 0;

  while (cursor < s.length) {
    const c = s[cursor];
    if (!map[c]) {
      map[c] = 0;
    }
    map[c]++;

    while (map[c] > 1) {
      const cs = s[start];
      map[cs]--;
      start++;
    }

    if (maxLen < (cursor - start)) {
      maxLen = cursor - start;
    }

    cursor++;
  }

  return s?.length > 0 ? maxLen + 1 : 0;
};

module.exports = lengthOfLongestSubstring;
