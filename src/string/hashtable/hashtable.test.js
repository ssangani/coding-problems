/* eslint no-undef: "off"*/
const isAnagram = require('./isAnagram');
const findAnagrams = require('./findAnagrams');

describe.each([
  {
    s: 'anagram',
    t: 'nagaram',
    expected: true
  },
  {
    s: 'rat',
    t: 'car',
    expected: false
  },
])('isAnagram($s, $t)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = isAnagram(s, t);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    s: 'cbaebabacd',
    t: 'abc',
    expected: [0,6]
  },
  {
    s: 'abab',
    t: 'ab',
    expected: [0,1,2]
  },
])('findAnagrams($s, $t)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = findAnagrams(s, t);
    expect(actual).toStrictEqual(expected);
  });
});
