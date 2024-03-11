/* eslint no-undef: "off"*/
const rabinKarp = require('./rabinKarp');

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
  }
])('stringSearch($haystack, $needle)', ({ haystack, needle, expected }) => {
  test(`rabinKarp returns ${expected}`, () => {
    const actual = rabinKarp(haystack, needle);
    expect(actual).toBe(expected);
  });
});
