/* eslint no-undef: "off"*/
const ransomNote = require('./ransomNote');
const RandomizedSet = require('./randomizedSet');

describe.each([
  {
    note: 'a',
    magazine: 'b',
    expected: false
  },
  {
    note: 'aa',
    magazine: 'ab',
    expected: false
  },
  {
    note: 'aa',
    magazine: 'aab',
    expected: true
  },
])('canConstruct($note, $magazine)', ({ note, magazine, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = ransomNote.canConstruct(note, magazine);
    expect(actual).toBe(expected);
  });
});

test('RandomizedSet', () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.remove(2)).toBe(false);
  expect(set.insert(2)).toBe(true);
  set.getRandom();
  expect(set.remove(1)).toBe(true);
  expect(set.insert(2)).toBe(false);
  expect(set.getRandom()).toBe(2);
});
