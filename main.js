// SECTION 1: BASIC RULES AND DATA TYPES

// Exercise 1: Formatting and Naming (Code Correction)
console.log("\nExercise 1");
var thisIsANewVariable = 10;
if (thisIsANewVariable == 10) {
    // code block
    console.log("The number is: " + thisIsANewVariable);
}

// Exercise 2: Defining Core Data Types (Coding)
console.log("\nExercise 2");
let stringVar = `hello`;
let numberVar = 1.2;
let booleanVar = true;
console.log("String Variable:", stringVar, "| Number Variable:", numberVar, "| Boolean Variable:", booleanVar);

// Exercise 3: Single-Line Comments (Coding)
console.log("\nExercise 3");
let currentScore = 95; // keeps track of the current score
console.log("Current Score:", currentScore);

// Exercise 4: Equality Comparison (Coding)
console.log("\nExercise 4");
console.log("Value equality:", '100' == 100);
console.log("Absolute strict equality:", '100' === 100);


// SECTION 2: CONDITIONALS AND CONTROL FLOW

// Exercise 5: Ternary Operator (Coding)
console.log("\nExercise 5");
let isWeekend = false;
let schedule;
// Write Ternary Operator
schedule = isWeekend ? "Day off" : "Work day";
console.log("Schedule:", schedule);

// Exercise 6: If/Else Structure (Coding)
console.log("\nExercise 6");
let userAge = 16;
// Write if/else statement
if (userAge >= 18) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}
console.log("User Age:", userAge);

// Exercise 7: Logical AND Operator (Coding)
console.log("\nExercise 7");
let hasPermission = true;
let itemCount = 3;
// Write if statement using AND operator:
if (hasPermission && itemCount < 5) {
    console.log("Ready to process");
}
console.log("Has permission:", hasPermission, "| Item count:", itemCount);

// Exercise 8: For Loop (Coding)
console.log("\nExercise 8");
for (let i = 1; i <= 5; i++) {
    console.log("Iteration:", i);
}

// Exercise 9: Loop Control (Coding)
console.log("\nExercise 9");
for (let i = 0; i <= 9; i++) {
    if (i == 7) {
        break;
    }
    console.log("Iteration:", i);
}

// Exercise 10: Ensuring Execution (Coding)
console.log("\nExercise 10");
let counter = 10;
// Write do while loop:
do {
    console.log("Running once");
    counter--;
} while (counter > 50);


// SECTION 3: FUNCTIONS AND DATA STRUCTURES

// Exercise 11: Functional Definition (Coding)
console.log("\nExercise 11");
function calculateArea(width, height) {
    let area = width * height;
    return area;
}
let resultArea = calculateArea(5, 10);
console.log("Result area:", resultArea);

// Exercise 12: Array Manipulation (Coding)
console.log("\nExercise 12");
let fruitList = ['Apple', 'Banana'];
fruitList.push('Grape'); // add to end of array
fruitList.shift(); // remove first item
console.log("Index number of 'Banana':", fruitList.indexOf("Banana")); // log index number of 'Banana'

// Exercise 13: Array Copying (Coding)
console.log("\nExercise 13");
let obj = { "one": 1, "two": 2 };
let originalData = [obj, 10, false, 'hello', 1, 3];
// slice makes a shallow copy
// any objects in the array are copied by reference, NOT duplicated
// so need to be aware that if the object is changed in one array it is changed in both
let clonedData = originalData.slice();
obj.three = 3;
console.log("Original Data:", originalData);
console.log("Cloned Data:", clonedData); // this has the 'three' element of obj even though the copy was made before this (shallow copy)

// Exercise 14: Object Constructor (Coding)
console.log("\nExercise 14");
function Animal(species, sound) {
    this.species = species;
    this.sound = sound;
}
let testAnimal = new Animal("test species", "test sound");
console.log("Test Animal:", testAnimal);

// Exercise 15: Object Instantiation (Coding)
console.log("\nExercise 15");
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Feline", "Meow");
let animalArray = [dog, cat];
console.log("Animal Array:", animalArray);
for (const animal of animalArray) { // enhanced for-loop
    // ?. is optional chaining operator to safely access properties that may be null
    console.log("Species:", animal?.species, "| Sound:", animal?.sound);
}
