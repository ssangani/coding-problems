/**
 * Knuth Morris Pratt Algo
 * @param {*} haystack 
 * @param {*} needle 
 * @returns {number}
 */
const kmp = (haystack, needle) => {
  const matches = [];
  let i = 0, j = 0, k = 0;
  const table = computePrefixLength(needle);
  while (j < haystack.length) {
    if (needle[k] == haystack[j]) {
      j++;
      k++;
      if (k == needle.length) {
        matches[i++] = j - k;
        k = table[k];
      }
    } else {
      k = table[k];
      if (k < 0) {
        j++;
        k++;
      }
    }
  }
  return matches.length < 1 ? -1 : matches[0];
};

/**
 * Build a KMP search table such that if S[m + i] != W[i]
 * then next possible match starts from m + i - T[i]
 * where T[i] < i
 * @param {string} word 
 * @returns {number[]}
 */
// eslint-disable-next-line no-unused-vars
const computePrefixLengthOg = (word) => {
  let pos, cnd = 0;
  const T = [];
  T[cnd] = -1;
  for (pos = 1; pos < word.length; pos++, cnd++) {
    if (word[pos] == word[cnd]) {
      T[pos] = T[cnd];
    } else {
      T[pos] = cnd;
      while (cnd >=0 && word[pos] != word[cnd]) {
        cnd = T[cnd];
      }
    }
  }
  T[pos] = cnd;
  return T;
};

/**
 * @param {string} word 
 * @returns {number[]}
 */
const computePrefixLength = (word) => {
  let k = 0;
  const T = [-1];
  for (let i = 1; i < word.length; i++) {
    if (word[i] == word[k]) {
      T[i] = T[k];
      k++;
    } else {
      T[i] = k;
      k = 0;
    }
  }
  T[word.length] = k;
  return T;
};

module.exports = kmp;
