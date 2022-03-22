// Conversion to String
const input = 100;

// Traditional Trick (Avoid)
const output1 = "" + input;
console.log(output1);
// Modern Trick (Preferred)
const output2 = String(input);
console.log(output2);
