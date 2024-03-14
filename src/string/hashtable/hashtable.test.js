/* eslint no-undef: "off"*/
const isAnagram = require('./isAnagram');

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
