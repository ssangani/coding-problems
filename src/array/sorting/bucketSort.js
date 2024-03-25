const bucketSort = (nums, k = nums.length) => {
  const n = nums.length;
  // Find max
  let max = nums[0];
  for (let i = 1; i < n; i++) {
    if (nums[i] > max) max = nums[i];
  }
  // Increment max so largest element always falls in [0,k-1] range
  max++;
  // Create buckets
  const buckets = [];
  for (let i = 0; i < k; i++) buckets[i] = [];
  // Group items using bucketing function
  for (let i = 0; i < n; i++) {
    const bucket = Math.floor(nums[i] * k / max);
    buckets[bucket].push(nums[i]);
  }
  // Sort each bucket
  for (let i = 0; i < k; i++) {
    sort(buckets[i]);
  }
  // Copy results
  let i = 0;
  for (const bucket of buckets) {
    for (let j = 0; j < bucket.length; j++) {
      nums[i++] = bucket[j];
    }
  }
};

const sort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
      [nums[j],nums[j-1]] = [nums[j-1], nums[j]];
    }
  }
};

module.exports = bucketSort;
