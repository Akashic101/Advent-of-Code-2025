console.time("Runtime");

const fs = require("fs");
const lines = fs.readFileSync("./Day 1/input.txt", "utf8").trim().split("\n");

let pos = 50;
let counter = 0;

for (const line of lines) {
  const dist = +line.slice(1);
  const dir = line[0];

  if (dir === "R") {
    pos += dist;
    // avoid modulo — cheap wrap
    if (pos >= 100) pos %= 100;  
  } else {
    pos -= dist;
    // avoid modulo — cheap wrap
    if (pos < 0) pos = (pos % 100 + 100) % 100;
  }

  if (pos === 0) counter++;
}

console.timeEnd("Runtime");
console.log("Result:", counter);
