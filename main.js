let readlineSync = require("readline-sync");

let entry;
let headSum = 0;
let tailSum = 0;

while (true) {
  entry = readlineSync.question("which side is the coin \n");
  if (entry === "stop") {
    break;
  }

  if (entry === "head") {
    headSum++;
  } else if (entry === "tail") {
    tailSum++;
  }
}

console.log("User has input head ",headSum,"times. And tail ",tailSum," times.");

const totalSum = headSum + tailSum;
const sumPercent = 100 / totalSum;
const headPercent = headSum * sumPercent;
const tailPercent = tailSum * sumPercent;

console.log("Head percent: ", headPercent);
console.log("Tail percent: ", tailPercent);
