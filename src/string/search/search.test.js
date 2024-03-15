/* eslint no-undef: "off"*/
const rabinKarp = require('./rabinKarp');
const kmp = require('./kmp');

describe.each([
  {
    haystack: 'sadbutsad',
    needle: 'sad',
    expected: 0
  },
  {
    haystack: 'leetcode',
    needle: 'leeto',
    expected: -1
  },
  {
    haystack: 'a',
    needle: 'a',
    expected: 0
  },
  {
    haystack: 'abcdef',
    needle: 'def',
    expected: 3
  },
  {
    haystack: 'ABC ABCDAB ABCDABCDABDE',
    needle: 'ABCDABD',
    expected: 15
  },
  {
    haystack: 'ABDABCABCABCDABD',
    needle: 'ABCABCD',
    expected: 6
  },
  {
    haystack: 'AAACAAADAAAEAAAAB',
    needle: 'AAAB',
    expected: 13
  },
  {
    haystack: 'aabaaabaaac',
    needle: 'aabaaac',
    expected: 4
  },
])('stringSearch($haystack, $needle)', ({ haystack, needle, expected }) => {
  test(`rabinKarp returns ${expected}`, () => {
    const actual = rabinKarp(haystack, needle);
    expect(actual).toBe(expected);
  });

  test(`kmp returns ${expected}`, () => {
    const actual = kmp(haystack, needle);
    expect(actual).toBe(expected);
  });
});
