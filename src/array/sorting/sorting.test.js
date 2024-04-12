/* eslint no-undef: "off"*/
const sortContinuousRange = require('./sortContinuousRange');
const mergeIntervals = require('./mergeIntervals');
const eraseOverlapIntervals = require('./eraseOverlappingIntervals');
const firstMissingPositive = require('./firstMissingPositive');
const hIndex = require('./hIndex');
const binarySearch = require('./binarySearch');
const kthSmallestInSortedMatrix = require('./kthSmallestInSortedMatrix');
const searchInSortedMatrix = require('./searchInSortedMatrix');
const findKthLargest = require('./findKthLargest');

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
    expect(actual).toBe(expected);
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
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    citations: [3,0,6,1,5],
    expected: 3
  },
  {
    citations: [1,3,1],
    expected: 1
  }
])('hIndex($citations)', ({ citations, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = hIndex(citations);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    nums: [-1,0,3,5,9,12],
    target: 9,
    expected: 4
  },
  {
    nums: [-1,0,3,5,9,12],
    target: 2,
    expected: -1
  }
])('binarySearch($nums, $target)', ({ nums, target, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = binarySearch(nums, target);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    matrix: [[1,5,9],[10,11,13],[12,13,15]],
    k: 8,
    expected: 13
  },
  {
    matrix: [[-5]],
    k: 1,
    expected: -5
  },
  {
    matrix: [[1,2],[1,3]],
    k: 3,
    expected: 2
  }
])('kthSmallestInSortedMatrix($matrix, $k)', ({ matrix, k, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = kthSmallestInSortedMatrix(matrix, k);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    k: 3,
    expected: true
  },
  {
    matrix: [[1,3,5,7],[10,11,16,20],[23,30,34,60]],
    k: 13,
    expected: false
  }
])('searchInSortedMatrix($matrix, $k)', ({ matrix, k, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = searchInSortedMatrix(matrix, k);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    nums: [3,2,1,5,6,4],
    k: 2,
    expected: 5
  },
  {
    nums: [3,2,3,1,2,4,5,5,6],
    k: 4,
    expected: 4
  }
])('findKthLargest($nums, $k)', ({ nums, k, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = findKthLargest(nums, k);
    expect(actual).toBe(expected);
  });
});
