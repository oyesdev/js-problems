// https://www.interviewbit.com/problems/highest-product/
const arr = [0, -1, 3, 100, 70, 50];
function maxProduct(arr) {
  arr.sort((a, b) => b - a);
  let x = arr[0] * arr[1] * arr[2];
  let y = arr[arr.length - 1] * arr[arr.length - 2] * arr[0];
  return Math.max(x, y);
}

console.log(maxProduct(arr));

// const arr2 = [-500, -400, 50, 70, 4000];
