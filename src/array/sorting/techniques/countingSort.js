const countingSort = (nums) => {
  let map = {};
  for (const num of nums) {
    if (!map[num]) map[num] = 0;
    map[num]++;
  }

  let i = 0;
  const keys = Object
    .keys(map)
    .map((k) => parseInt(k))
    .sort((a, b) => a - b);
  for (const key of keys) {
    while (map[key] > 0) {
      nums[i++] = key;
      map[key]--;
    }
  }
};

module.exports = countingSort;
