/* eslint no-undef: "off"*/
const sortContinuousRange = require('./sortContinuousRange');
const mergeIntervals = require('./mergeIntervals');
const eraseOverlapIntervals = require('./eraseOverlappingIntervals');
const firstMissingPositive = require('./firstMissingPositive');

describe.each([
  {
    nums: [4,3,5,2,1],
    expected: [1,2,3,4,5]
  },
  {
    nums: [0,5,1,3,4,2],
    expected: [0,1,2,3,4,5]
  },
  {
    nums: [75,77,74,71,72,73,79,76,78],
    expected: [71,72,73,74,75,76,77,78,79]
  },
])('sortContinuousRange($nums)', ({ nums, expected }) => {
  test(`returns ${expected}`, () => {
    sortContinuousRange(nums);
    expect(nums).toStrictEqual(expected);
  });
});

describe.each([
  {
    intervals: [[1,3],[2,6],[8,10],[15,18]],
    expected: [[1,6],[8,10],[15,18]]
  },
  {
    intervals: [[1,4],[4,5]],
    expected: [[1,5]]
  },
  {
    intervals: [[1,4],[0,4]],
    expected: [[0,4]]
  },
  {
    intervals: [[1,4],[1,5]],
    expected: [[1,5]]
  },
  {
    intervals: [[1,4],[2,3]],
    expected: [[1,4]]
  },
])('mergeIntervals($intervals)', ({ intervals, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = mergeIntervals(intervals);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    intervals: [[1,2],[2,3],[3,4],[1,3]],
    expected: 1
  },
  {
    intervals: [[1,2],[1,2],[1,2]],
    expected: 2
  },
  {
    intervals: [[1,2],[2,3]],
    expected: 0
  }
])('eraseOverlapIntervals($intervals)', ({ intervals, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = eraseOverlapIntervals(intervals);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [1,2,0],
    expected: 3
  },
  {
    nums: [3,4,-1,1],
    expected: 2
  },
  {
    nums: [7,8,9,11,12],
    expected: 1
  }
])('firstMissingPositive($nums)', ({ nums, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = firstMissingPositive(nums);
    expect(actual).toStrictEqual(expected);
  });
});
