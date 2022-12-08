function board(m, n) {
  let arr = [];

  let temparr = [];
  let even = false;
  for (let i = 1; i <= m * n; i++) {
    temparr.push(i);

    if (i % n === 0) {
      if (even) {
        arr.push(temparr.reverse());
        even = false;
      } else {
        arr.push(temparr);
        even = true;
      }
      temparr = [];
    }
  }

  //  console.log(arr.reverse().flat().join('\n'));
  arr.reverse().forEach((arr) => {
    console.log(arr.join(" "));
  });
}

board(10, 10);

//   const arr = [[]];
//   console.log(arr.length);
//   console.log(6 % 3);
