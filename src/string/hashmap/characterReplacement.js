/**
 * You are given a string s and an integer k. You can choose any
 * character of the string and change it to any other uppercase
 * English character. You can perform this operation at most k times.
 * 
 * Return the length of the longest substring containing the same
 * letter you can get after performing the above operations.
 * 
 * Example 1:
 * Input: s = "ABAB", k = 2
 * Output: 4
 * Explanation: Replace the two 'A's with two 'B's or vice versa.
 * 
 * Example 2:
 * Input: s = "AABABBA", k = 1
 * Output: 4
 * Explanation: Replace the one 'A' in the middle with 'B' and form
 * "AABBBBA". The substring "BBBB" has the longest repeating letters,
 * which is 4. There may exists other ways to achieve this answer too.
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  // Init frequency pointers
  const freq = [];
  for (let i = 0; i < 26; i++) freq[i] = 0;

  let l = 0, res = 0;
  const offset = 'A'.charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    // Increment index for current char
    const idx = s.charCodeAt(i) - offset;
    freq[idx]++;
    // Find most amount of recurring characters
    const maxFreq = getMaxFrequency(freq);
    const windowLen = i - l + 1;
    // If window needs at most k replacements
    if (windowLen - maxFreq <= k) {
      // Check if current window is longest one so far
      res = Math.max(res, i - l + 1);
    } else {
      // Drop left most character out of window
      const leftIdx = s.charCodeAt(l) - offset;
      freq[leftIdx]--;
      l++;
    }
  }
  return res;
};

const getMaxFrequency = (freq) => {
  let maxFreq = freq[0];
  for (let i = 1; i < 26; i++) maxFreq = Math.max(maxFreq, freq[i]);
  return maxFreq;
};

module.exports = characterReplacement;
