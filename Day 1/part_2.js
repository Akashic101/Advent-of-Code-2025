console.time("Runtime");

const fs = require("fs");
const lines = fs.readFileSync("./Day 1/input.txt", "utf8").trim().split("\n");

let pos = 50;
let count = 0;
const dial = 100;

for (const line of lines) {
  const sign = line[0] === "R" ? 1 : -1;
  const dist = +line.slice(1);

  if (sign === 1) {
    let p = pos;
    for (let i = 0; i < dist; i++) {
      p++;
      if (p === dial) p = 0;
      if (p === 0) count++;
    }
    pos = p;
  } else {
    let p = pos;
    for (let i = 0; i < dist; i++) {
      p--;
      if (p === -1) p = 99;
      if (p === 0) count++;
    }
    pos = p;
  }
}

console.timeEnd("Runtime");
console.log("Result:", count);
