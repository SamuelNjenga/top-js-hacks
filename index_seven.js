// Default Value -> Assign Value to a variable if it is missing
let x, y;
let p,
  z = 80;
// Traditional Trick (Avoid)
x || (x = 90);
console.log(x);
y ?? (y = 10);
console.log(y);

// Modern trick
p ||= 100;
console.log(p);
z ??= 200;
console.log(z);
