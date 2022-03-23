// Array Resizing -> To remove few last elements from an array, simply modify the array's length property value. Items from the array will automatically be removed.

let languages = ["JavaScript", "Python", "NodeJS", "Java"];

// Traditional Trick (Avoid)
languages.pop();
languages.splice(2);
console.log(languages);

// Modern Trick (Preferred)
languages.length = 1;
console.log(languages);
