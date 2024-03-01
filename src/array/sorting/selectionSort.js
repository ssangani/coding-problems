const selectionSort = (nums) => {
  let t;
  // For each position, find smallest element in right sub-array and swap
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    t = nums[i];
    nums[i] = nums[min];
    nums[min] = t;
  }
};

module.exports = selectionSort;
