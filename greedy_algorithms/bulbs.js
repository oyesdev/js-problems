// https://www.interviewbit.com/problems/interview-questions/
const arr = [0, 1, 0, 1];
// 1 0 1 0
// 1 1 0 1
// 1 1 1 0
// 1 1 1 1
const arr2 = [1, 0, 1, 0, 0, 0, 1];
// 1 0 1 0 0 0 1
// 1 1 0 1 1 1 0
// 1 1 1 0 0 0 1
// 1 1 1 1 1 1 0
// 1 1 1 1 1 1 1

function countSwitches(arr) {
  let ans = 0,
    k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (k === arr[i]) {
      if (k === 0) k = 1;
      else k = 0;
      ans++;
    }
  }
  return ans;
}

console.log(countSwitches(arr2));
