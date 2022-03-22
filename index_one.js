// Conversion to Number
const input = "100";

// Trick 1
const output1 = +input;
console.log(output1);
// Trick 2
const output2 = Number(input);
console.log(output2);
// Trick 3
const output3 = parseInt(input);
console.log(output3);
// Trick 4
const output4 = parseInt(input, 2); // -> Binary to Decimal Conversion
console.log(output4);
