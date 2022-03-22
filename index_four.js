// Complex String
const fName = "Samuel",
  lName = "Njenga";

// Traditional Trick (Avoid)
const output1 = "Hello" + " " + fName + " " + lName;
// Modern Trick (Preferred)
const output2 = `Hello ${fName} ${lName}`;
console.log(output1);
console.log(output2);
