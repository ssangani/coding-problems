/* eslint no-undef: "off"*/
const isPalindrome = require('./isPalindrome');

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
])('isPalindrome($s)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = isPalindrome(s, t);
    expect(actual).toBe(expected);
  });
});
