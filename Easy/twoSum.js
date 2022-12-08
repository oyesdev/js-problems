const nums = [3, 3],
  target = 6;

function twoSum(nums, target) {
  let obj = {},
    arr = [];
  for (let i = 0; i < nums.length; ++i) {
    if (obj.hasOwnProperty(target - nums[i])) {
      return [obj[target - nums[i]], i];
    } else {
      obj[nums[i]] = i;
    }
  }
}

console.log(twoSum(nums, target));
