/* eslint no-undef: "off"*/
const productExceptSelf = require('./productExceptSelf');
const maxSubArray = require('./maxSubArray');
const maxProduct = require('./maxProduct');

describe.each([
  {
    nums: [1,2,3,4],
    expected: [24,12,8,6]
  },
  {
    nums: [-1,1,0,-3,3],
    expected: [0,0,9,0,0]
  },
])('productExceptSelf($nums)', ({ nums, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = productExceptSelf(nums);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [-2,1,-3,4,-1,2,1,-5,4],
    expected: 6
  },
  {
    nums: [1],
    expected: 1
  },
  {
    nums: [5,4,-1,7,8],
    expected: 23
  },
])('maxSubArray($nums)', ({ nums, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = maxSubArray(nums);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [2,3,-2,4],
    expected: 6
  },
  {
    nums: [-2,0,-1],
    expected: 0
  },
])('maxProduct($nums)', ({ nums, expected }) => {
  test(`simplified returns ${expected}`, () => {
    const actual = maxProduct.simplified(nums);
    expect(actual).toStrictEqual(expected);
  });

  test(`optimized returns ${expected}`, () => {
    const actual = maxProduct.optimized(nums);
    expect(actual).toStrictEqual(expected);
  });
});
