/* eslint no-undef: "off"*/
const selectionSort = require('./techniques/selectionSort');
const insertionSort = require('./techniques/insertionSort');
const bubbleSort = require('./techniques/bubbleSort');
const mergeSort = require('./techniques/mergeSort');
const quickSort = require('./techniques/quickSort');
const countingSort = require('./techniques/countingSort');
const cycleSort = require('./techniques/cycleSort');
const radixSort = require('./techniques/radixSort');
const bucketSort = require('./techniques/bucketSort');
const heapSort = require('./techniques/heapSort');
const sortContinuousRange = require('./sortContinuousRange');
const mergeIntervals = require('./mergeIntervals');
const eraseOverlapIntervals = require('./eraseOverlappingIntervals');
const firstMissingPositive = require('./firstMissingPositive');

describe.each([
  {
    nums: [3,2,1,1,5,4,9,8,10,6,7],
    expected: [1,1,2,3,4,5,6,7,8,9,10]
  },
  {
    nums: [3,2,1,5,4,9,8,10,6,7],
    expected: [1,2,3,4,5,6,7,8,9,10]
  },
  {
    nums: [5,4,9,10,14,7,1,0,3,2],
    expected: [0,1,2,3,4,5,7,9,10,14]
  },
  {
    nums: [170, 45, 75, 90, 802, 24, 2, 66],
    expected: [2, 24, 45, 66, 75, 90, 170, 802]
  }
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

  test(`cycleSort.accepted returns ${expected}`, () => {
    cycleSort.accepted(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`cycleSort.simplifed returns ${expected}`, () => {
    cycleSort.simplifed(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`radixSort returns ${expected}`, () => {
    radixSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`bucketSort returns ${expected}`, () => {
    bucketSort(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`heapSort returns ${expected}`, () => {
    heapSort(nums);
    expect(nums).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [2,-1,-2,-5,-1,0,0,-1,-10,0,1,2,3,5,1,4],
    expected: [-10,-5,-2,-1,-1,-1,0,0,0,1,1,2,2,3,4,5]
  },
])('sortIncludingNegatives($nums)', ({ nums, expected }) => {
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

  test(`cycleSort.accepted returns ${expected}`, () => {
    cycleSort.accepted(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`cycleSort.simplifed returns ${expected}`, () => {
    cycleSort.simplifed(nums);
    expect(nums).toStrictEqual(expected);
  });

  test(`heapSort returns ${expected}`, () => {
    heapSort(nums);
    expect(nums).toStrictEqual(expected);
  });
});

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





