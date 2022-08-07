// var obj = {
//   2344: { priority_score: 1, ahead: 0 },
//   2345: { priority_score: 0, ahead: 1 },
//   2346: { priority_score: 0, ahead: 2 },
//   2347: { priority_score: 0, ahead: 3 },
// };

// var obj2 = {
//   2344: { priority_score: "1", ahead: "1" },
//   2345: { priority_score: "0", ahead: "2" },
//   2346: { priority_score: "2", ahead: "0" },
//   2347: { priority_score: "0", ahead: "3" },
// };

// function result(obj) {
//   let tempArray;
//   let tempObj = {};
//   for (const prop in obj) {
//     tempObj[obj[prop].priority_score] = [];
//   }
//   console.log(tempObj);
// }

// result(obj);

function priority(obj) {
  const objx = {
    2344: { priority_score: "1", ahead: "0" },
    2345: { priority_score: "0", ahead: "1" },
    2346: { priority_score: "0", ahead: "2" },
    2347: { priority_score: "0", ahead: "3" },
  };

  const key = Object.keys(obj)[0];

  if (objx[key]) {
    objx[key] = { ...objx[key], ...obj[key] };
  }

  const arr = [];

  for (let key in objx) {
    const score = objx[key]["priority_score"];
    arr.push([score, key]);
  }

  arr.sort((a, b) => {
    return b[0] - a[0];
  });

  arr.forEach((arr, index) => {
    const [priority, key] = arr;
    objx[key] = { ...objx[key], ahead: index };
  });

  return objx;
}

const obj = { 2346: { priority_score: "2" } };

console.log(priority(obj));

console.log(priority({ 2347: { priority_score: "1" } }));
