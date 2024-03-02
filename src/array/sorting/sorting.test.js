/* eslint no-undef: "off"*/

const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const countingSort = require('./countingSort');
const mergeIntervals = require('./mergeIntervals');

describe.each([
  {
    nums: [3,2,1,1,5,4,9,8,10,6,7],
    expected: [1,1,2,3,4,5,6,7,8,9,10]
  },
])('sort($nums)', ({ nums, expected }) => {
  test(`selectionSort returns ${expected}`, () => {
    selectionSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`insertionSort returns ${expected}`, () => {
    insertionSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`bubbleSort returns ${expected}`, () => {
    bubbleSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`mergeSort returns ${expected}`, () => {
    mergeSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`quickSort returns ${expected}`, () => {
    quickSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`countingSort returns ${expected}`, () => {
    countingSort(nums);
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

