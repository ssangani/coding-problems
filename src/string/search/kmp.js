/**
 * Knuth Morris Pratt Algo
 * @param {*} haystack 
 * @param {*} needle 
 * @returns {number}
 */
const kmp = (haystack, needle) => {
  const matches = [];
  let m = 0, i = 0;
  const lps = computePrefixLength(needle);
  while (m < haystack.length) {
    if (needle[i] == haystack[m]) {
      m++;
      i++;
      if (i == needle.length) {
        matches.push(m - i);
        i = lps[i];
      }
    } else {
      i = lps[i];
      if (i == -1) {
        m++;
        i = 0;
      }
    }
  }
  return matches.length < 1 ? -1 : matches[0];
};

/**
 * Build a prefix length table such that if mistmatch
 * occurs at i then, k = T[i] indicates how many preceeding
 * k characters match with first k characters of W.
 * 
 * If S[m + i] != W[i]
 * then next possible match starts from m + i - k
 * where k < i
 * 
 * Three possible cases:
 * 1. k = -1 ie matches W[0]
 *    In this case next comparison begins at S[m + 1] against W[0]
 * 2. k is zero ie prefix isn't a substring.
 *    In this case next comparison begins at S[m] against W[0]
 * 3. k is a positive ie preceeding k chars  form a prefix substring.
 *    In this case next comparison begins at k + 1 character by
 *    comparing S[m] against W[k]
 * 
 * NOTE: Based on original pseudocode
 * @param {string} word 
 * @returns {number[]}
 */
// eslint-disable-next-line no-unused-vars
const computePrefixLengthOg = (word) => {
  let pos = 1, cnd = 0;
  const T = [];
  T[cnd] = -1;
  while (pos < word.length) {
    if (word[pos] == word[cnd]) {
      T[pos] = T[cnd];
    } else {
      T[pos] = cnd;
      while (cnd >=0 && word[pos] != word[cnd]) {
        cnd = T[cnd];
      }
    }
    pos++;
    cnd++;
  }
  T[pos] = cnd;
  return T;
};

/**
 * Readable version of above algo
 * @param {string} word 
 * @returns {number[]}
 */
const computePrefixLength = (word) => {
  // k tracks last index of prefix string
  let k = 0;
  // Base case first character is set to -1 so next comparison
  // moves the window on S and resets the window on W
  const lps = [-1];
  // For each character check if current character and
  // latest prefix character match
  for (let i = 1; i < word.length; i++, k++) {
    if (word[i] == word[k]) {
      // If matched then the prefix length for current char is
      // same as prefix length of latest prefix char
      lps[i] = lps[k];
    } else {
      // If mismatched then the prefix length for current char is
      // k since preceeding k characters W[0,k-1] match
      lps[i] = k;
      // Backtrack k to the point where W[i] = W[k] or k = -1
      while (k >=0 && word[k] != word[i]) {
        k = lps[k];
      }
    }
  }
  // Add length of valid prefix when end of string is reached
  lps[word.length] = k;
  return lps;
};

module.exports = kmp;
