/* eslint no-undef: "off"*/
const searchInRotatedSortedArray = require('./searchInRotatedSortedArray');
const binarySearch = require('./binarySearch');
const searchInSortedMatrix = require('./searchInSortedMatrix');
const kthSmallestInSortedMatrix = require('./kthSmallestInSortedMatrix');
const findMedianSortedArrays = require('./findMedianSortedArrays');

describe.each([
  {
    nums: [4,5,6,7,0,1,2],
    target: 0,
    expected: 4
  },
  {
    nums: [4,5,6,7,0,1,2],
    target: 3,
    expected: -1
  },
  {
    nums: [1],
    target: 0,
    expected: -1
  },
])('searchInRotatedSortedArray($nums, $target)', ({ nums, target, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = searchInRotatedSortedArray(nums, target);
    expect(actual).toStrictEqual(expected);
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
    nums1: [1,3],
    nums2: [2],
    expected: 2.0
  },
  {
    nums1: [1,2],
    nums2: [3,4],
    expected: 2.5
  },
])('findMedianSortedArrays($nums1, $nums2)', ({ nums1, nums2, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = findMedianSortedArrays(nums1, nums2);
    expect(actual).toBe(expected);
  });
});
