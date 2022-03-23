// Function Rest Parameter -> Instead of using "arguments" variable to manipulate your function parameters, use the modern approach of using a "rest parameter"

const languages = ["Java", "JavaScript", "Python", "NodeJS", "Golang"];
const fruits = ["Orange", "Apple", "Mango", "Banana", "Pineaple"];

// Traditional Trick (Avoid)
function eat() {
  const first = languages[0];
  const second = languages[1];
  console.log(first, second);
}
eat();

// Modern Trick (Preferred)
function eatTwo(...fruits) {
  const [first, second] = fruits;
  console.log(first, second);
}
eatTwo(...fruits);
