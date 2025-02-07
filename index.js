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
const user = {
   name: "Fernando"
};

// Properties inside the obj can be mutated/reassigned
user.name = "Ronald"

// Will log 'Ronald' (the reassigned property value)
console.log(user.name)

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

console.log(doubled); // Output = [2, 4, 6]

// Question #13 — map() vs forEach()
// What's the main difference?

// A) map() returns a new array; forEach() does not /// My answer

// B) forEach() returns a new array; map() does not
// C) They always return the same thing
// D) map() only works with numbers

// Question #14 — filter()
// Create an variable with an array of numbers
const nums = [1, 2, 3, 4, 5];

// Create an variable named result, in which the nums will be filtered,
// and return a new array of numbers greater than 2
const result = nums.filter(num => num > 2);

console.log(result); // Output = [3, 4, 5]