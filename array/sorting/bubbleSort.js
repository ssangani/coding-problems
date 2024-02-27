const bubbleSort = (nums) => {
  let t;
  for (let j = nums.length - 1; j >= 0; j--) {
    // Push/bubble largest element of sub-array to end of the sub-array
    for (let i = 0; i < j; i++) {
      if (nums[i] > nums[i+1]) {
        t = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = t;
      }
    }
    // With right-most element in correct position, re-apply bubbling
    // to remaining elements
  }
}
