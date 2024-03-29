/* eslint no-undef: "off"*/
const RandomizedSet = require('./randomizedSet');
const LRUCache = require('./lruCache');

test('Randomized Set', () => {
  const set = new RandomizedSet();
  expect(set.insert(1)).toBe(true);
  expect(set.remove(2)).toBe(false);
  expect(set.insert(2)).toBe(true);
  set.getRandom();
  expect(set.remove(1)).toBe(true);
  expect(set.insert(2)).toBe(false);
  expect(set.getRandom()).toBe(2);
});

test('LRU Cache', () => {
  const lruCache = new LRUCache(2);
  lruCache.put(1, 1);
  lruCache.put(2, 2);
  expect(lruCache.get(1)).toBe(1);
  lruCache.put(3, 3);
  expect(lruCache.get(2)).toBe(-1);
  lruCache.put(4, 4);
  expect(lruCache.get(1)).toBe(-1);
  expect(lruCache.get(3)).toBe(3);
  expect(lruCache.get(4)).toBe(4);
});
