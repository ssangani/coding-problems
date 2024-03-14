/**
 * Given two strings s and t, return true if t is an anagram of s,
 * and false otherwise.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 * 
 * Example 1:
 * Input: s = "anagram", t = "nagaram"
 * Output: true
 * 
 * Example 2:
 * Input: s = "rat", t = "car"
 * Output: false
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  if (s.length != t.length) return false;
  if (s.length == 0) return true;

  const map = {};
  for (const c of s) {
    if (!map[c]) {
      map[c] = 0;
    }
    map[c]++;
  }
  for (const c of t) {
    if (!map[c]) {
      map[c] = 0;
    }
    map[c]--;
  }
  for (const c in map) {
    if (map[c] !== 0) return false;
  }
  return true;
};

module.exports = isAnagram;
