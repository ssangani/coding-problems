/* eslint no-undef: "off"*/
const isPalindrome = require('./isPalindrome');
const longestPalindrome = require('./longestPalindrome');

describe.each([
  {
    s: 'A man, a plan, a canal: Panama',
    expected: true
  },
  {
    s: 'race a car',
    expected: false
  },
  {
    s: ' ',
    expected: true
  },
  {
    s: '0P',
    expected: false
  },
])('isPalindrome($s)', ({ s, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = isPalindrome(s);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    s: 'babad',
    expected: 'bab'
  },
  {
    s: 'cbbd',
    expected: 'bb'
  },
])('longestPalindrome($s)', ({ s, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = longestPalindrome(s);
    expect(actual).toBe(expected);
  });
});
