const countingSort = (nums) => {
  let map = {};
  for (const num of nums) {
    if (!map[num]) map[num] = 0;
    map[num]++;
  }

  let i = 0;
  for (const n in map) {
    const num = parseInt(n);
    while (map[n] > 0) {
      nums[i++] = num;
      map[n]--;
    }
  }
}
