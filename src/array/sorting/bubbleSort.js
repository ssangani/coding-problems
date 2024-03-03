const bubbleSort = (nums) => {
  /**
   * It's called bubble sort because largest element of left sub-array
   * keeps bubbling to beginning of right sub-array.
   */
  for (let j = nums.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (nums[i] > nums[i+1]) {
        [nums[i], nums[i+1]] = [nums[i+1],nums[i]];
      }
    }
  }
};

module.exports = bubbleSort;
