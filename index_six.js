// Nullish Check using Nullish Coalsescing Operator(??)

let input;
const jsFunc = () => {
  console.log("JavaScript Hacks");
};

// Traditional Trick (Avoid)
input === null && input === undefined && jsFunc();

// Modern Trick (Preferred)
input ?? jsFunc();
