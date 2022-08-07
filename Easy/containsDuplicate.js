//* Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// https://leetcode.com/problems/contains-duplicate/

const arr = [1, 2, 3, 4];
// output : true;

//*  Set Solution:
function containsDuplicate(arr) {
  const set = new Set(arr);
  return set.size !== arr.length;
}

//* One liner soln:
function containsDuplicate(nums) {
  return new Set(nums).size !== nums.length;
}

//* map soln:

const containsDuplicate = (nums) => {
  let tracker = {};
  for (let i = 0; i < nums.length; i++) {
    if (tracker[nums[i]]) {
      return true;
    } else {
      tracker[nums[i]] = true;
    }
  }
  return false;
};

// * Set solution
const containsDuplicate = function (nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    } else {
      set.add(nums[i]);
    }
  }
  return false;
};

console.log(containsDuplicate(arr));
