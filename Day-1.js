//
// Day - 1
//

import { RAW_DATA } from "./RAW_DATA.js";

//need to sanitise the data
const data = RAW_DATA.split("\n\n");
// where theres a double newline is a different elf
const cleanData = data
  .map((dirtyData) =>
    dirtyData
      .split("\n")
      .map((string) => parseInt(string))
      .reduce((acc, cur) => acc + cur, 0)
  )
  .sort((a, b) => a < b);

console.log(cleanData[0]);
//  Part 2
const [a, b, c] = cleanData;

// console.log(a + b + c);
