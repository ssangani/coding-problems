/* eslint no-undef: "off"*/
const productExceptSelf = require('./productExceptSelf');

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
