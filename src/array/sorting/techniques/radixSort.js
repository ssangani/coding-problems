const radixSort = (nums, radix = 10) => {
  const max = getMax(nums);
  const maxDigits = Math.floor(Math.log(max, radix) + 1);
  for (let digit = 0; digit <= maxDigits; digit++) {
    sort(nums, digit, radix);
  }
};

const sort = (nums, digit, radix) => {
  // Initialize counters for each significant digit in radix
  const counts = [];
  for (let i = 0 ; i < radix; i++) counts[i] = 0;
  // For each element, increment counter for it's corresponding
  // significant digit
  for (let i = 0; i < nums.length; i++) {
    const sd = getSignificantDigit(nums[i], digit, radix);
    counts[sd]++;
  }
  // Convert individual significant digit counts to offsets
  // by adding previous significant digits counts which precede
  // in order
  for (let i = 1; i < radix; i++) {
    counts[i] += counts[i - 1];
  }
  // Build
  const res = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    const sd = getSignificantDigit(nums[i], digit, radix);
    res[counts[sd] - 1] = nums[i];
    counts[sd]--;
  }
  // Copy
  for (let i = 0; i < nums.length; i++) {
    nums[i] = res[i];
  }
};

const getSignificantDigit = (num, digit, radix) =>
  Math.floor(num / radix**digit) % radix;

const getMax = (nums) => {
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i];
  }
  return max;
};

module.exports = radixSort;
