const insertionSort = (nums) => {
  let t;
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while (j >= 0 && nums[j-1]>nums[j]) {
      t = nums[j-1];
      nums[j-1] = nums[j];
      nums[j] = t;
      j--;
    }
  }
}
