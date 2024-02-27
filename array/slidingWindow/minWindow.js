/**
 * Given two strings s and t of lengths m and n respectively,
 * return the minimum window substring of s such that every character
 * in t (including duplicates) is included in the window. If there is
 * no such substring, return the empty string "".
 * 
 * The testcases will be generated such that the answer is unique.
 * Example 1:
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * 
 * Example 2:
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 * 
 * Example 3:
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * @param stirng s 
 * @param string t 
 * @returns string
 */
const minWindow = (s, t) => {
  // Increment counter for each character in t
  const map = {};
  for (const c of t) {
      if (!map[c]) {
          map[c] = 1;
      } else {
          map[c]++;
      }
  }

  let start = 0,
      minStart = 0,
      minLen = Number.MAX_VALUE,
      counter = t.length,
      cursor = 0;

  while (cursor < s.length) {
    const c = s[cursor];
    if (map[c] > 0) {
      // Decrement counter if cursor was present in t 
      counter--;
    } else if (!map[c]) {
      // Add char to map if missing
      map[c] = 0;
    }
    // Decrement counter for cursor
    map[c]--;
    // Move the cursor
    cursor++;

    // If all the characters in t are found in the substring, then move the
    // left-most pointer until one of the chars in t is dropped
    while (counter == 0) {
      // Update if current sub-string is smaller than previous one
      if (minLen > (cursor - start)) {
        minLen = cursor - start;
        minStart = start;
      }

      const sc = s[start];
      map[sc]++;
      if (map[sc] > 0) {
        counter++;
      }
      start++;
    }
  }

  return minLen == Number.MAX_VALUE
    ? ""
    : s.substring(minStart, minStart + minLen);
}
