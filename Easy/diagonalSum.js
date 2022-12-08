const mat = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

function diagonalSum(mat) {
  let sum = 0,
    n = mat.length;
  for (let i = 0; i < n; ++i) {
    sum += mat[i][i] + mat[n - i - 1][i];
  }
  const ans =
    n % 2 === 0 ? sum : sum - mat[Math.floor(n / 2)][Math.floor(n / 2)];
  console.log(ans);
}

diagonalSum(mat);
