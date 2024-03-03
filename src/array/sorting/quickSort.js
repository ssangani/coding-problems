const quickSort = (nums) => {
  sort(nums, 0, nums.length - 1);
};

const sort = (nums, low, high) => {
  if (low >= high) return;

  const p = partition(nums, low, high);
  sort(nums, low, p - 1);
  sort(nums, p + 1, high);
};

const partition = (nums, low, high) => {
  let i = low - 1;
  // Choose last element as pivot
  const pivot = nums[high];
  // Push elements smaller than pivot to left subarray
  for (let j = low; j < high; j++) {
    if (nums[j] < pivot) {
      i++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  // Swap pivot and end of left subarray
  i++;
  nums[high] = nums[i];
  nums[i] = pivot;
  // Return pviot position
  return i;
};

module.exports = quickSort;
