// Start: JavaScript Fundamentals — let, const, scope

// #1
// Variable 'x' is declared and assigned the
// value of 10 in the outer/global scope
// let x = 10

// 'if' condition is hardcoded to true so the block
// always excecutes
if (true) {
   // New variable 'x' is shadowed and scoped inside this block,
   // assigned 20
   let x = 20
   // logs 20 (the block scoped 'x')
   // console.log(x)
}
// logs 10 (the outer-scoped 'x', completely untouched by the block condition)
// console.log(x)

// #2
// The 'user' constant is assigned an object reference
// const user = {
//    name: "Fernando"
// };

// Properties inside the obj can be mutated/reassigned
// user.name = "Ronald"

// // Will log 'Ronald' (the reassigned property value)
// console.log(user.name)

// Question 3
// 'var a' is hoisted to the top scope, 
// but initialized as 'undefined'
console.log(b); // logs undefined

// 'a' is assigned the value 10 here
var b = 10;

// var a;         // Hoisted to the top with value 'undefined'
// console.log(a); // Logs 'undefined'
// a = 10;        // Assignment stays in place

// Question #4
// 'c' is hoisted, but resides in the Temporal Dead Zone (TDZ)
// until initialized
// console.log(c); // ReferencError: Cannot access 'c' before initialization

// 'c' is initialized here
let c = 10;

// Question #5
// Function declarations are fully hoisted,
// allowing 'foo()' to be called before its actual place
// in the code
// foo();
// The function declaration is lifted to the top
// of the scope during memory creation
// function foo() { // Fully hoisted
//    console.log("Hello")
// }


// Question #6
// Because foo is declared with const,
// it's in Temporal Dead Zone until initialization
// foo();
// Not callable before initialization
const foo = function () {
   console.log("Hello")
}

// Question #7
// Function is defined, accepting two parameters
function add(a, b) {
   // Returns the sum of param 'a' and param 'b'
   return a + b;
}
// Invoke the function to get the output of 5:
console.log(add(2, 3)); // Output 5

// Question #8 — Parameters vs. arguments
// Function is defined, accepting one parameter
function greet(name) {
   // Return template literal string embedding the 'name' parameter
   return `Hello, ${name}`;
}
// Calls the function; returns "Hello, Fernando"
// (wrap in console.log() to print to terminal)
console.log(greet('Fernando')); // Logs: "Hello, Fernando"

// Question 9 — return
// Function is defined to demonstrate early return behavior
function test() {
   console.log("A"); // Logs: "A"
   return;          // Exits the function immediately, returning undefined
   console.log("B"); // Unreachable code: never executes because it comes after 'return'
}
// Only returns "A"
// test();

// Question 10 — Scope
// Variable 'x' is declared in the global scope and assigned 10
let x = 10;

// Function defines a local scope
function test() {
  // A new variable 'x' is scoped inside 'test', shadowing the global 'x'
  let x = 20;
  console.log(x); // Logs: 20 (local 'x')
}

test();          // Calls the function, executing the log above (Logs: 20)
console.log(x);  // Logs: 10 (global 'x', remaining completely unchanged)

// Question 11 — Closures
// 'outer' creates a parent scope containing 'count'
function outer() {
  let count = 0;

  // Inner function retains access to 'count' even after 'outer' finishes (Closure)
  return function() {
    count++;      // Increments the preserved 'count' variable
    return count; // Returns the updated value
  };
}

// 'outer()' executes and returns the inner function,
// creating a persistent closure around 'count'
const counter = outer();

console.log(counter()); // Logs: 1 (count increments from 0 to 1)
console.log(counter()); // Logs: 2 (count increments from 1 to 2 using the same closure state)

// Question #12 — Higher-order functions
// Created a variable with an array of nums
// const nums = [1, 2, 3]
   // Created a second variable called doubled,
   // mapped the array to return the nums in a new array multiplied by 2
// const doubled = nums.map(num => num * 2);

// console.log(doubled); // Output = [2, 4, 6]

// Question #13 — map() vs forEach()
// What's the main difference?

// A) map() returns a new array; forEach() does not /// My answer

// B) forEach() returns a new array; map() does not
// C) They always return the same thing
// D) map() only works with numbers

// Question #14 — filter()
   // Create an variable with an array of numbers
// const nums = [1, 2, 3, 4, 5];

   // Create a variable named result, in which the nums will be filtered,
   // and return a new array of numbers greater than 2
// const result = nums.filter(num => num > 2);

// console.log(result); // Output = [3, 4, 5]

// Question #15 — reduce()
   // Create a variable with an array of numbers
const nums = [1, 2, 3, 4];
   // Create a variable named result, use the reduce to accumulate
   // each array element into a running total, starting at 0
const result = nums.reduce((total, num) => total + num, 0);

// console.log(result) // Log: 10

// Question 16 — Objects
// Creates an object with properties representing a user
// const user = {
//   name: "Fernando",
//   age: 40,
//   sex: "male"
// };

// // Accesses and logs the value of the 'sex' property using dot notation
// console.log(user.sex); // Logs: "male"

// Question 17 — Destructuring

// Here is the quick breakdown of what JavaScript does behind the scenes on that exact line:
// const: Creates a brand-new, read-only local variable.
// { name }: Tells JavaScript, "Look for a key matching the word name inside the source object."
// = user: Points to the target object (user) from which to pull that property.
// It is a shorthand equivalent to writing:
// const name = user.name;

// Creates an object with name and age properties
// const user = {
//   name: "Karl",
//   age: 40
// };
// // Uses object destructuring to extract the 'name' 
// // property into a standalone variable
// const { name } = user;

console.log(name); // Logs: "Fernando"

// Question #18 — Destructuring
const player = {
   name: "Fernando",
   age: 40
}

const { age } = player;

console.log(age)

// // A) "age"
      // B) 40 // My answer
// C) undefined
// D) Error

// Question #19 — Array destructuring
// Declares an array containing three color strings
const colors = ["red", "blue", "green"];

// Uses array destructuring to extract elements by their position (index)
// 'first' gets colors[0] ("red") and 'second' gets colors[1] ("blue")
const [first, second] = colors;

// Accesses and logs the value stored in 'second'
console.log(second); // Logs: "blue"

// A) "red"
      // B) "blue" // My Answer
// C) "green"
// D) undefined

// Question #20 — Spread operator
// Declares an array with three initial number elements
const units = [1, 2, 3];

// Uses the spread operator (...) to copy all elements from 'units' 
// into a brand-new array, appending 4 at the end
const newUnits = [...units, 4];

// Accesses and logs the newly created array
console.log(newUnits); // Logs: [1, 2, 3, 4]

// A) [1, 2, 3]
// B) [4, 1, 2, 3]
      // C) [1, 2, 3, 4] // My answer
// D) Error

// Question #21 — Rest parameter
// The rest parameter (...numbers) gathers all passed 
// arguments into a single array: [1, 2, 3]
function sum(...numbers) {
   // .reduce() iterates through [1, 2, 3],
   // accumulating elements into a single sum starting at 0
   return numbers.reduce((total, num) => total + num, 0);
}

// Calls sum() with arguments 1, 2, and 3; returns and logs 6
console.log(sum(1, 2, 3)); // Output: 6
// A) 3
// B) 6 My answer
// C) [1, 2, 3]
// D) Error

// Question #22 — === vs ==
// Strict equality (===) checks both value AND data type.
// Number vs String are different types, so this returns false.
console.log(5 === "5"); // Logs: false

// Loose equality (==) performs type coercion before comparing.
// Converts the string "5" to the number 5, so this returns true.
console.log(5 == "5");  // Logs: true
// A) true / true
// B) false / false
// C) false / true  // My answer
// D) true / false

// Question #23 — Truthy / Falsy
// Arrays are objects in JS; all objects (even empty ones) are truthy
console.log(Boolean([])); // Logs: true

// Objects (even empty ones with no properties) are truthy
console.log(Boolean({})); // Logs: true

// Empty strings have a length of 0 and evaluate to falsy
console.log(Boolean("")); // Logs: false

// A) false / false / false
// B) true / true / false // My answer
// C) true / false / true
// D) false / true / false

//Empty arrays [] and objects {} are truthy. Empty strings "" are falsy.

// Question #24 — null vs undefined
// Variable declared without an assigned value defaults to 'undefined'
let a;

// Variable explicitly assigned the value 'null' (intentional absence of value)
let d = null;

// Logs 'undefined' because 'a' has no value set
console.log(a); // Logs: undefined

// Logs 'null' because 'd' was explicitly set to null
console.log(d); // Logs: null

// A) null / undefined
// B) undefined / null // My answer
// C) null / null
// D) undefined / undefined

// Question #25 — Scope + closure
// A function can access variables from its outer scope.
// Variable declared in the global scope
// let m = 10;

// function test() {
//    // Accesses 'm' from its outer (global) scope via lexical scoping
//    console.log(m);
// }

// // Executes test(), printing the value of 'm'
// test(); // Logs: 10

// A) undefined
// B) 10 // My answer
// C) ReferenceError
// D) null

// Question #26 — this
// Creates a user object with a 'name' property and a 'greet' method
const user = {
   name: "Mike",
   lastName: "Flog",
   greet() {
      // 'this' refers to the object that called the method — here, 'user'
      console.log(this.lastName);
   }
};

// Calls the greet method on the 'user' object
user.greet(); // Logs: "Mike"