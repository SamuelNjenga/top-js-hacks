// Short Circuits -> && or ||
const hungry = true,
  tired = false;

// Traditional Trick (Avoid)
if (hungry) console.log("JavaScript");
if (!tired) console.log("NodeJs");

// Modern Trick (Preferred)
hungry && console.log("JavaScript");
tired || console.log("NodeJs");
