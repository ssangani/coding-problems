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
  const map = {};
  for (const c of p) {
    if (!map[c]) map[c] = 0;
    map[c]++;
  }

  const n = s.length;
  const m = p.length;
  let counter = m;
  const res = [];
  for (let i = 0; i < n; i++) {
    const c = s[i];
    if (!map[c]) map[c] = 0;
    if (map[c] > 0) counter--;
    map[c]--;

    if (i >= m) {
      const sc = s[i - m];
      map[sc]++;
      if (map[sc] > 0) counter++;
    }

    if (counter == 0) {
      res.push(i - m + 1);
    }
  }
  return res;
};

module.exports = findAnagrams;
