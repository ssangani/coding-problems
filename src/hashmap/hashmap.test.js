/* eslint no-undef: "off"*/
const ransomNote = require('./ransomNote');

describe([
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
