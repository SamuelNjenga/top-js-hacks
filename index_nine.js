// Optional Chaining -> To avoid TypeError, instead of checking whether a property exists in an object manually, use "Optional Chaining Operator" (?.)

const area = { dimension: { width: 400 } };
// Traditional Trick (Avoid)
var width = area && area.dimension && area.dimension.width;
console.log(width);
// Modern Trick (Preferred)
var width = area?.dimension?.width;
console.log(width);
