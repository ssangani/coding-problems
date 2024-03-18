/**
 * Given two strings ransomNote and magazine, return true
 * if ransomNote can be constructed by using the letters from
 * magazine and false otherwise.
 * 
 * Each letter in magazine can only be used once in ransomNote.
 * 
 * Example 1:
 * Input: ransomNote = "a", magazine = "b"
 * Output: false
 * 
 * Example 2:
 * Input: ransomNote = "aa", magazine = "ab"
 * Output: false
 * 
 * Example 3:
 * Input: ransomNote = "aa", magazine = "aab"
 * Output: true
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // Assuming only lowercase english characters are
  // used, we can use 26 char frequency map.
  // A regular hashmap would be useful if character
  // space was unbound
  const offset = 'a'.charCodeAt(0);
  const freq = [];
  for (let i = 0; i < 26; i++) freq[i] = 0;
  // Increment character frequency for each unique char in ransom note
  for (const c of ransomNote) {
    const idx = c.charCodeAt(0) - offset;
    freq[idx]++;
  }
  // Decrement characters needed for ransom note as found
  for (const c of magazine) {
    const idx = c.charCodeAt(0) - offset;
    if (freq[idx] > 0) freq[idx]--;
  }
  // Check if there are any remaining characters
  for (let i = 0; i < 26; i++) {
    if (freq[i] > 0) return false;
  }
  // Stretch goal - use similar chars eg: 4 for A, 1 for l
  return true;
};

module.exports = { canConstruct };
