//leetcode.com/problems/move-zeroes/submissions/

https: var moveZeroes = function (nums) {
  let cnt = 0;
  for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      cnt++;
      i = i - 1;
    }
  }
  while (cnt--) {
    nums.push(0);
  }
  return nums;
};
