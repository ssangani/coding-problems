/* eslint no-undef: "off"*/
const dailyTemperatures = require('./dailyTemperatures');
const canSeePersonsCount = require('./canSeePersonsCount');
const maxSlidingWindow = require('./maxSlidingWindow');

describe.each([
  {
    temperatures: [73,74,75,71,69,72,76,73],
    expected: [1,1,4,2,1,1,0,0]
  },
  {
    temperatures: [30,40,50,60],
    expected: [1,1,1,0]
  },
  {
    temperatures: [30,60,90],
    expected: [1,1,0]
  },
])('dailyTemperatures($temperatures)', ({ temperatures, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = dailyTemperatures(temperatures);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    heights: [10,6,8,5,11,9],
    expected: [3,1,2,1,1,0]
  },
  {
    heights: [5,1,2,3,10],
    expected: [4,1,1,1,0]
  },
])('canSeePersonsCount($heights)', ({ heights, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = canSeePersonsCount(heights);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [1,3,-1,-3,5,3,6,7],
    target: 3,
    expected: [3,3,5,5,6,7]
  },
  {
    nums: [1],
    target: 1,
    expected: [1]
  },
])('maxSlidingWindow($nums, $target)', ({ nums, target, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = maxSlidingWindow(nums, target);
    expect(actual).toStrictEqual(expected);
  });
});

