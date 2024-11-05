// 1

function randomElements(arr, n) {
  let result = [];
  let copyArr = [...arr];
  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * copyArr.length);
    result.push(copyArr[randomIndex]);
    copyArr.splice(randomIndex, 1);
  }
  return result;
}

console.log(randomElements([1, 2, 3, 4, 5, 6, 7, 8], 3));

// 2

function uniqueWords(str) {
  let words = str.split(" ");
  let uniqueWords = [...new Set(words)];
  return uniqueWords;
}

console.log(uniqueWords("apple banana apple orange banana"));

// 3

function flattenArray(arr) {
  return arr.flat(Infinity);
}

console.log(flattenArray([1, [2, 3], [4, [5, 6]]]));

// 4

function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));
