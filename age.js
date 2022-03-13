function millisecondsToYears(num) {
  return num / 31557600000;
}

function calculateAgeFromDate() {
  const userInput = prompt("Please enter date in format YYYY-MM-DD");
  const currentDate = Date.now();
  const targetDate = Date.parse(userInput);
  return Math.floor(millisecondsToYears(currentDate - targetDate));
}

const age = calculateAgeFromDate();
console.log(`That was ${age} years ago!`);
