//* Given an integer array nums and two integers k and t, return true
//* if there are two distinct indices i and j in the array such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k.

const arr = [1, 5, 9, 1, 5, 9];
const t = 3;
const k = 2;

var containsDuplicate = function (nums, k, t) {
  let numFreq = {};

  let check = false;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];

    if (!numFreq[num] && numFreq[num] !== 0) {
      numFreq[num] = i;
    } else if (numFreq[num] > -1) {
      const calcAbs = Math.abs(i - numFreq[num]);
      const calctabs = Math.abs(nums[i] - nums[numFreq[num]]);

      if (calcAbs <= k && calctabs <= t) {
        return true;
      }

      numFreq[num] = i;
    }
  }
  return check;
};

console.log(containsDuplicate(arr, k, t));
