const selectionSort = (nums) => {
  /**
   * Simplest technique where you start from left-most element,
   * find smallest element in right sub-array, swap, and repeat
   * process for each element until you reach end
   */
  let minIndx;
  for (let i = 0; i < nums.length; i++) {
    minIndx = i;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[minIndx]) {
        minIndx = j;
      }
    }

    [nums[i], nums[minIndx]] = [nums[minIndx], nums[i]];
  }
};

module.exports = selectionSort;
