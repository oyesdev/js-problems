// https://leetcode.com/problems/majority-element/

//* Find the majority element

var majorityElement = function (nums) {
  let x = undefined; // the majority element
  let count = 0; // the count of the majority element
  for (let n of nums) {
    if (count === 0) x = n;
    count += x === n ? 1 : -1;
  }
  return x;
};
