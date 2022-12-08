// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const arr = [1, 2, 3, 4, 5, 6],
  ele = 2;

//* Binary Search Implementation
const binarySearch = (arr, ele) => {
  let end = arr.length - 1;
  let start = arr[0];
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (ele === arr[mid]) return mid;
    else if (ele < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

// * First and last occurrence of an element.

var searchRange = function (nums, target) {
  const f = firstOccur(nums, target);
  const l = lastOccur(nums, target);
  const arr = [f, l];
  return arr;
};

function lastOccur(arr, ele) {
  let high = arr.length - 1;
  let res = -1;
  let low = 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > ele) high = mid - 1;
    else if (arr[mid] < ele) low = mid + 1;
    else if (arr[mid] === ele) {
      res = mid;
      low = mid + 1;
    }
  }
  return res;
}

function firstOccur(arr, ele) {
  let high = arr.length - 1;
  let low = 0;
  let res = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > ele) high = mid - 1;
    else if (arr[mid] < ele) low = mid + 1;
    else if (arr[mid] === ele) {
      res = mid;
      high = mid - 1;
    }
  }
  return res;
}
