const minWindow = require('./minWindow');
const minSubArrayLen = require('./minSubArrayLen');
const lengthOfLongestSubstring = require('./lengthOfLongestSubstring');

describe.each([
  { s: "ADOBECODEBANC", t: "ABC", expected: "BANC" },
  { s: "a", t: "a", expected: "a" },
  { s: "a", t: "aa", expected: "" },
])('minWindow($s, $t)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = minWindow(s, t);
    expect(actual).toBe(expected);
  })
});

describe.each([
  { target: 7, nums: [2,3,1,2,4,3], expected: 2 },
  { target: 4, nums: [1,4,4], expected: 1 },
  { target: 11, nums: [1,1,1,1,1,1,1,1], expected: 0 },
])('minSubArrayLen($target, $nums)', ({ target, nums, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = minSubArrayLen(target, nums);
    expect(actual).toBe(expected);
  })
});

describe.each([
  { s: "abcabcbb", expected: 3 },
  { s: "bbbbb", expected: 1 },
  { s: "pwwkew", expected: 3 },
])('lengthOfLongestSubstring($s)', ({ s, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = lengthOfLongestSubstring(s);
    expect(actual).toBe(expected);
  })
});
