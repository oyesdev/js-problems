//* Given an integer array nums and an integer k,
//* return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

// https://leetcode.com/problems/contains-duplicate-ii/

const arr = [1, 0, 1, 1];
const k = 1;

//* Map Solution
// function containsNearByDuplicate(nums, k) {
//   const map = new Map();
//   for (let i = 0; i < nums.length; ++i) {
//     if (i - map.get(nums[i]) <= k) return true;
//     else map.set(nums[i], i);
//   }

//   return false;
// }

// * Object solution
function containsNearByDuplicate(nums, k) {
  const obj = {};
  for (let i = 0; i < nums.length; ++i) {
    if (obj.hasOwnProperty(nums[i])) {
      if (Math.abs(obj[nums[i]] - i) <= k) return true;
    }
    obj[nums[i]] = i;
  }
  return false;
}

console.log(containsNearByDuplicate(arr, k));
