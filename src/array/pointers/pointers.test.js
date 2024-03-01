/* eslint no-undef: "off"*/

const sortColors = require('./sortColors');
const countSubstrings = require('./palindromicSubstrings');
const mergeSortedArrays = require('./mergeSortedArrays');

describe.each([
  { nums: [2,0,2,1,1,0], expected: [0,0,1,1,2,2] },
  { nums: [2,0,1], expected: [0,1,2] },
])('sortColors($nums)', ({ nums, expected }) => {
  test(`results in ${expected}`, () => {
    sortColors(nums);
    expect(nums).toStrictEqual(expected);
  });
});

describe.each([
  { s: 'abc', expected: 3 },
  { s: 'aaa', expected: 6 },
])('countSubstrings($s)', ({ s, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = countSubstrings(s);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums1: [1,2,3,0,0,0],
    m: 3,
    nums2: [2,5,6],
    n: 3,
    expected: [1,2,2,3,5,6] 
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1] 
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1] 
  },
])('mergeSortedArrays($nums1, $m, $nums2, $n)', ({ nums1, m, nums2, n, expected }) => {
  test(`results in ${expected}`, () => {
    mergeSortedArrays(nums1, m, nums2, n);
    expect(nums1).toStrictEqual(expected);
  });
});