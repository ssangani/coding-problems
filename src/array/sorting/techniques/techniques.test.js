/* eslint no-undef: "off"*/
const selectionSort = require('./selectionSort');
const insertionSort = require('./insertionSort');
const bubbleSort = require('./bubbleSort');
const mergeSort = require('./mergeSort');
const quickSort = require('./quickSort');
const countingSort = require('./countingSort');
const cycleSort = require('./cycleSort');
const radixSort = require('./radixSort');
const bucketSort = require('./bucketSort');
const heapSort = require('./heapSort');

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
])('sortNegativeNumbers($nums)', ({ nums, expected }) => {
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
