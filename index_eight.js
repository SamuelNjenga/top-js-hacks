// Default Function Parameter -> Check if a function parameter is missing its value and manually assign a value to it

// Traditional Trick (Avoid)
function eat(first, second, third) {
  first ?? (first = "JavaScript");
  second ?? (second = "TypeScript");
  third ?? (third = "NodeJS");
  console.log("----------------------------");
  console.log(first, second, third);
}
eat();

console.log("----------------------------");
function eatTwo(first = "JavaScript", second = "TypeScript", third = "NodeJS") {
  console.log(first, second, third);
  console.log("----------------------------");
}
eatTwo();
