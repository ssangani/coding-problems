const mergeSort = (nums) => {
  /**
   * 1. Merging two sorted arrays can be done in O(m + n) time
   * 2. You can split array into two halves recursively until you
   * reach array of size 2, merge the halves recursively, repeating
   * process O(logN) times.
   * 3. It does require extra space 
   */
  sort(nums, 0, nums.length - 1);
};

const sort = (nums, low, high) => {
  if (low >= high) return;

  const mid = low + Math.floor((high - low) / 2);
  sort(nums, low, mid);
  sort(nums, mid + 1, high);
  merge(nums, low, mid, high);
};

const merge = (nums, low, mid, high) => {
  let i = low, j = mid + 1;
  // Copy elements to an auxillary array
  const aux = [];
  for (let k = low; k <= high; k++) {
    aux[k] = nums[k];
  }
  // Use two pointers to merge two sorted arrays
  for (let k = low; k <= high; k++) {
    if (i > mid) {
      nums[k] = aux[j++];
    } else if (j > high) {
      nums[k] = aux[i++];
    } else if (aux[i] < aux[j]) {
      nums[k] = aux[i++];
    } else {
      nums[k] = aux[j++];
    }
  }
};

module.exports = mergeSort;
