const mergeSort = (nums) => {
  sortSubArray(nums, 0, nums.length - 1);
}

const sortSubArray = (nums, low, high) => {
  if (low >= high) return;

  const mid = low + Math.floor((high - low) / 2);
  sortSubArray(nums, low, mid);
  sortSubArray(nums, mid + 1, high);
  merge(nums, low, mid, high);
}

const merge = (nums, low, mid, high) => {
  let i = low, j = mid + 1;

  const aux = [];
  for (let k = low; k <= high; k++) {
    aux[k] = nums[k];
  }

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
}
