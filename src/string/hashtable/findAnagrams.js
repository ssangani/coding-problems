/**
 * Given two strings s and p, return an array of all the start indices
 * of p's anagrams in s. You may return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 * 
 * Example 1:
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0,6]
 * Explanation:
 * The substring with start index = 0 is "cba", which is an
 * anagram of "abc".
 * The substring with start index = 6 is "bac", which is an
 * anagram of "abc".
 * 
 * Example 2:
 * Input: s = "abab", p = "ab"
 * Output: [0,1,2]
 * Explanation:
 * The substring with start index = 0 is "ab",
 * which is an anagram of "ab".
 * The substring with start index = 1 is "ba",
 * which is an anagram of "ab".
 * The substring with start index = 2 is "ab",
 * which is an anagram of "ab".
 * 
 * NOTE: Below is a modified version of minWindow algo
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = (s, p) => {
  const res = [];
  // Initialize map with counters using each char in p
  const map = {};
  for (const c of p) {
    if (!map[c]) map[c] = 0;
    map[c]++;
  }
  // Let counter track number of chars needed to form p
  const n = s.length;
  const m = p.length;
  let counter = m;
  for (let i = 0; i < n; i++) {
    // Decrement char counter for newly added character
    const c = s[i];
    if (!map[c]) map[c] = 0;
    // If char was part of p then  decrement global counter
    if (map[c] > 0) counter--;
    map[c]--;
    // Since anagram has fixed length of m, the first
    // char needs to be dropped out of window
    // by incrementing it's char counter
    if (i >= m) {
      const sc = s[i - m];
      map[sc]++;
      // If dropped char was needed for p then increment global counter
      if (map[sc] > 0) counter++;
    }
    // If all characters in p are present then add
    // index of beginning of substring
    if (counter == 0) {
      res.push(i - m + 1);
    }
  }
  return res;
};

module.exports = findAnagrams;
