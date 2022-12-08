const arr = [
  {
    id: 1,
    name: "dals",
    parent: {
      id: 10,
      name: "Pulses",
      parent: {
        id: 110,
        name: "Barcode Difficulty",
        parent: null,
      },
    },
  },
  {
    id: 2,
    name: "Chocolates",
    parent: {
      id: 20,
      name: "Others",
      parent: null,
    },
  },
  {
    id: 3,
    name: "Sooji/Daliya/Sabudaana",
    parent: {
      id: 30,
      name: "Barcode Difficulty",
      parent: null,
    },
  },
  {
    id: 4,
    name: "Staple Others",
    parent: {
      id: 40,
      name: "Barcode Difficulty",
      parent: null,
    },
  },
  {
    id: 5,
    name: "Cooking-Others",
    parent: {
      id: 50,
      name: "Local SKU",
      parent: null,
    },
  },
];

function rec(obj) {
  let temp = {};
  if (!obj.parent) return;
  else rec(obj.parent);
}

// function returnArr(arr) {
//     let temp = {};
//     for (let i = 0; i < arr.length; i++) {

//     }
// }
