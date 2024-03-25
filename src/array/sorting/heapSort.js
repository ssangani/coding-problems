const heapSort = (nums) => {
  let n = nums.length;
  // Build heap
  for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
    maxHeapify(nums, n, i);
  }
  // Sort by bubbling max heap towards end of array
  // and heapifying shorter array
  for (let i = n - 1; i >= 0; i--) {
    [nums[0], nums[i]] = [nums[i], nums[0]];
    n--;
    maxHeapify(nums, n, 0);
  }
};

const maxHeapify = (nums, n, i) => {
  const l = left(i);
  const r = right(i);
  let m = i;
  // Update max pointer if left is larger
  if (l < n && nums[l] > nums[m]) m = l;
  // Update max pointer if right is larger
  if (r < n && nums[r] > nums[m]) m = r;
  // Swap max and root, and heapify from max recursively until valid
  if (m != i) {
    [nums[i], nums[m]] = [nums[m], nums[i]];
    maxHeapify(nums, n, m);
  }
};

const left = (i) => 2*i + 1;
const right = (i) => 2*i + 2;

module.exports = heapSort;
