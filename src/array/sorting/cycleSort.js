const accepted = (nums) => {
  const n = nums.length;
  let item, pos;
  for (let i = 0; i < n - 2; i++) {
    item = nums[i];
    pos = i;

    // Find how many elements are smaller than current item
    // ie how many positions will current element move forward
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < item) pos++;
    }

    // Item is already in place
    if (pos == i) continue;

    // Ignore duplicates
    while (item == nums[pos]) pos++;

    // Swap the item to it's correct position
    [nums[i], nums[pos]] = [nums[pos], nums[i]];

    // Rotate rest of the cycle until correct item
    // is placed in ith position
    while (pos != i) {
      pos = i;
      // Find correct position to place ith element
      for (let j = i + 1; j < n; j++) {
        if (nums[j] < item) pos++;
      }
      // Ignore dupes
      while (nums[pos] == item) pos++;
      // Swap
      if (pos != i) {
        [nums[i], nums[pos]] = [nums[pos], nums[i]];
      }
    }
  }
};

const simplifed = (nums) => {
  const n = nums.length;
  let i = 0, pos;
  while (i < n) {
    pos = i;
    for (let j = i+1; j < n; j++) {
      if (nums[i] < nums[i]) pos++;
    }

    if (pos == i) {
      i++;
      continue;
    }

    [nums[i], nums[pos]] = [nums[pos, nums[i]]];
  }
};

module.exports = {
  accepted,
  simplifed
};
