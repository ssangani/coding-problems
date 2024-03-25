/* eslint no-undef: "off"*/
const isAnagram = require('./isAnagram');
const findAnagrams = require('./findAnagrams');
const groupAnagrams = require('./groupAnagrams');
const characterReplacement = require('./characterReplacement');
const ransomNote = require('./ransomNote');

describe.each([
  {
    s: 'anagram',
    t: 'nagaram',
    expected: true
  },
  {
    s: 'rat',
    t: 'car',
    expected: false
  },
])('isAnagram($s, $t)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = isAnagram(s, t);
    expect(actual).toBe(expected);
  });
});

describe.each([
  {
    s: 'cbaebabacd',
    t: 'abc',
    expected: [0,6]
  },
  {
    s: 'abab',
    t: 'ab',
    expected: [0,1,2]
  },
])('findAnagrams($s, $t)', ({ s, t, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = findAnagrams(s, t);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    strs: ['eat','tea','tan','ate','nat','bat'],
    expected: [['eat','tea','ate'],['tan', 'nat'],['bat']]
  },
  {
    strs: [''],
    expected: [['']]
  },
  {
    strs: ['a'],
    expected: [['a']]
  },
])('groupAnagrams($strs)', ({ strs, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = groupAnagrams(strs);
    expect(actual).toStrictEqual(expected);
  });
});

describe.each([
  {
    s: 'ABAB',
    k: 2,
    expected: 4
  },
  {
    s: 'AABABBA',
    k: 1,
    expected: 4
  },
  {
    s: 'AAAABBB',
    k: 1,
    expected: 5
  },
  {
    s: 'AAAABBBAAAAA',
    k: 1,
    expected: 6
  },
])('characterReplacement($s, $k)', ({ s, k, expected }) => {
  test(`returns ${expected}`, () => {
    const actual = characterReplacement(s, k);
    expect(actual).toBe(expected);
  });
});

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
