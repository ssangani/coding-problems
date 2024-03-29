const insertionSort = (nums) => {
  /**
   * Visualize sorting cards in your hand.
   * You start from 2nd element, move it to left until it reaches start of array or left
   * item is smaller than current element, and then repeat for next item
   */
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0 && nums[j-1] > nums[j]; j--) {
      [nums[j-1], nums[j]] = [nums[j], nums[j-1]];
    }
  }
};

module.exports = insertionSort;
