function findMinAndMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return [min, max];
}

function parseUserArray(str) {
  str = str.replace("[", "").replace("]", "");
  return str.split(",").map(Number);
}

const userArray = prompt("Please enter an array of numbers (separated by commas)");

console.log(findMinAndMax(parseUserArray(userArray)));
