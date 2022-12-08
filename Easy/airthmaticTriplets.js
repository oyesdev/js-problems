//* https://leetcode.com/problems/number-of-arithmetic-triplets/

const nums = [0, 1, 4, 6, 7, 10],
  diff = 3;
function airthmaticTriplets(nums, diff) {
  let cnt = 0;
  let set = new Set();
  for (let i = 0; i < nums.length; ++i) {
    if (set.has(nums[i] - diff) && set.has(nums[i] - diff - diff)) cnt++;
    set.add(nums[i]);
  }
  return cnt;
}

console.log(airthmaticTriplets(nums, diff));
