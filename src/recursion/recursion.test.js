/* eslint no-undef: "off"*/
const generateParenthesis = require('./generateparanthesis');
const combine = require('./combine');
const subsets = require('./subsets');
const letterCombinations = require('./letterCombinations');

describe.each([
  {
    n: 1,
    expected: ['()']
  },
  {
    n: 2,
    expected: ['()()', '(())']
  },
  {
    n: 3,
    expected: ['((()))', '()(())', '(())()', '(()())', '()()()']
  }
])('generateParenthesis($n)', ({ n, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = generateParenthesis(n);
    actual.sort();
    expected.sort();
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    n: 1,
    k: 1,
    expected: [[1]]
  },
  {
    n: 4,
    k: 2,
    expected: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
  },
  {
    n: 4,
    k: 3,
    expected: [[1,2,3],[1,2,4],[1,3,4],[2,3,4]]
  }
])('combine($n, $k)', ({ n, k, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = combine(n, k);
    actual.sort();
    expected.sort();
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    nums: [1,2,3],
    expected: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  },
  {
    nums: [0],
    expected: [[],[0]]
  }
])('subsets($nums)', ({ nums, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = subsets(nums);
    actual.sort();
    expected.sort();
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    digits: '23',
    expected: ['ad','ae','af','bd','be','bf','cd','ce','cf']
  },
  {
    digits: '',
    expected: []
  },
  {
    digits: '2',
    expected: ['a','b','c']
  },
])('letterCombinations($digits)', ({ digits, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = letterCombinations(digits);
    actual.sort();
    expected.sort();
    expect(actual).toStrictEqual(expected);
  });
});
