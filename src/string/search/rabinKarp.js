/**
 * Given two strings needle and haystack, return the index of the
 * first occurrence of needle in haystack, or -1 if needle is not
 * part of haystack.
 * 
 * Example 1:
 * Input: haystack = "sadbutsad", needle = "sad"
 * Output: 0
 * Explanation: "sad" occurs at index 0 and 6.
 * The first occurrence is at index 0, so we return 0.
 * 
 * Example 2:
 * Input: haystack = "leetcode", needle = "leeto"
 * Output: -1
 * Explanation: "leeto" did not occur in "leetcode", so we return -1.
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const rabinKarp = (haystack, needle) => {
  const n = haystack.length;
  const m = needle.length;
  const needleHash = hash(needle);
  for (let i = 0; i <= n - m; i++) {
    const rollingHash = hash(haystack, i, i + m);
    if (rollingHash != needleHash) continue;

    let matches = true;
    for (let j = 0; j < m; j++) {
      if (needle[j] != haystack[i + j]) {
        matches = false;
        break;
      }
    }

    if (matches) return i;
  }

  return -1;
};

const hash = (str, start = 0, end = str.length) => {
  let hash = 0;
  for (let i = start; i < end; i++) {
    let chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }
  return hash;
};

module.exports = rabinKarp;
