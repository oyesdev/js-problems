// https://leetcode.com/problems/count-the-number-of-consistent-strings/

const allowed = "ab",
  words = ["ad", "bd", "aaab", "baa", "badab"];
const countConsistentStrings = function (allowed, words) {
  const counte = words.reduce((acc, curr) => {
    const check = curr.split("").every((str) => allowed.includes(str));
    check && acc++;
    return acc;
  }, 0);

  return counte;
};

console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa"]));

//* Using map:

function countConsistentStrings(alllowed, words) {
  let isconsistent = 0;
  let map = {};

  for (let char of allowed) {
    map[char] = 1;
  }

  for (let i = 0; i < words.length; ++i) {
    let word = words[i];
    for (let j = 0; j < word.length; ++j) {
      let char = word[j];
      if (!map[char]) break;
      if (j === word.length - 1) isconsistent++;
    }
  }

  return isconsistent;
}

console.log(countConsistentStrings(allowed, words));
