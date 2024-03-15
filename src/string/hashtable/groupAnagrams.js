/**
 * Given an array of strings strs, group the anagrams together.
 * You can return the answer in any order.
 * 
 * An Anagram is a word or phrase formed by rearranging the letters
 * of a different word or phrase, typically using all the original
 * letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const map = {};
  for (const str of strs) {
    const hash = toHashCode(str);
    if (!map[hash]) map[hash] = [];
    map[hash].push(str);
  }

  const res = [];
  for (const hash in map) {
    res.push(map[hash]);
  }
  return res;
};

const toHashCode = (str) => {
  // Since str only contains lowercase english chars
  // we can initialize static 26 pointer array
  const freq = [];
  for (let i = 0; i < 26; i++) freq[i] = 0;
  const offset = 'a'.charCodeAt(0);
  // Update frequencies of each occuring char
  for (const s of str) {
    const idx = s.charCodeAt(0) - offset;
    freq[idx]++;
  }
  // Build frequency string for occuring chars
  let hash = '';
  for (let i = 0; i < 26; i++) {
    if (freq[i] != 0) {
      const s = String.fromCharCode(offset + i);
      hash += `${s}${freq[i]}`;
    } 
  }
  return hash;
};

module.exports = groupAnagrams;
