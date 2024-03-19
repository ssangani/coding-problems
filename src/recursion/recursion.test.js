/* eslint no-undef: "off"*/
const generateParenthesis = require('./generateparanthesis');

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
