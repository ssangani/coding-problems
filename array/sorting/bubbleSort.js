const bubbleSort = (nums) => {
  let t;
  for (let j = nums.length - 1; j >= 0; j--) {
    for (let i = 0; i < j; i++) {
      if (nums[i] > nums[i+1]) {
        t = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = t;
      }
    }
  }
}
