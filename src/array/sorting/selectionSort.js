const selectionSort = (nums) => {
  /**
   * Simplest technique where you start from left-most element,
   * find smallest element in right sub-array, swap, and repeat
   * process for each element until you reach end
   */
  for (let i = 0; i < nums.length; i++) {
    let min = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    [nums[i], nums[min]] = [nums[min], nums[i]];
  }
};

module.exports = selectionSort;
