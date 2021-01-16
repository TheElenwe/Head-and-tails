const prompt = require("prompt-sync")({ sigint: true });

sum = 0;
entry = Number(prompt("which side is the coin: "));
while (entry >= 0) {
  sum += entry;
  entry = Number(prompt("which side is the coin"));
  if (entry === "stop") {
  }
}
console.log(`The sum is ${sum}`);
