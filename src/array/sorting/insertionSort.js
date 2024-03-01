const insertionSort = (nums) => {
  let t;
  // Starting with second element move right
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    // Keep swapping current and previous element if current element is smaller than previous
    while (j > 0 && nums[j-1]>nums[j]) {
      t = nums[j-1];
      nums[j-1] = nums[j];
      nums[j] = t;
      j--;
    }
  }
}
