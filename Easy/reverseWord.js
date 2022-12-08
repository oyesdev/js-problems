function reverseString(str) {
  let arrayOfStr = str.split(" ");
  const reversed = arrayOfStr.map((eachWord) => {
    return eachWord.split("").reverse().join("");
  });
  return reversed.join(" ");
}

console.log(reverseString("Welcome to the Javascript World!"));
