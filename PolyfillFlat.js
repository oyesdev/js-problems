const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [
    [8, 9],
    [10, 11, [13, 14, 15]],
  ],
];

function flattenArray(arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; ++i) {
    let subArr = arr[i];
    if (!Array.isArray(subArr)) {
      resultArr.push(subArr);
    } else {
      resultArr.push(...flattenArray(subArr));
    }
  }
  return resultArr;
}

console.log(flattenArray(arr));
