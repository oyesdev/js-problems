//leetcode.com/problems/maximum-average-subarray-i/

// * O(n * k) Soln:
https: function printAvg(arr, k) {
  let ans = [];

  for (let i = 0; i <= arr.length - k; ++i) {
    let sum = 0;
    for (let j = 0; j < k; ++j) {
      sum += arr[i + j];
    }

    ans.push(sum / k);
  }
  return ans;
}

// console.log(printAvg([1, 2, 3, 4, 5], 3));
// console.log(printAvg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));

function optimisedPrintAvg(arr, k) {
  let ans = [];
  let start = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; ++i) {
    sum += arr[i];
    if (i >= k - 1) {
      ans.push(sum / k);
      sum -= arr[start];
      start++;
    }
  }

  return ans;
}

console.log(optimisedPrintAvg([1, 2, 3, 4, 5], 3));
