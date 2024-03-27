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
  let left = low;
  // Choose last element as pivot
  const pivot = nums[high];
  // Push elements smaller than pivot to left subarray
  for (let i = low; i < high; i++) {
    if (nums[i] < pivot) {
      [nums[left], nums[i]] = [nums[i], nums[left]];
      left++;
    }
  }
  // Swap pivot and end of left subarray
  nums[high] = nums[left];
  nums[left] = pivot;
  // Return pviot position
  return left;
};

module.exports = quickSort;
