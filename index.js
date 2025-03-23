// // Start: JavaScript Fundamentals — let, const, scope
// // #1
// // Variable 'x' is declared and assigned the
// // value of 10 in the outer/global scope
// // let x = 10

// // 'if' condition is hardcoded to true so the block
// // always excecutes
// if (true) {
//    // New variable 'x' is shadowed and scoped inside this block,
//    // assigned 20
//    let x = 20
//    // logs 20 (the block scoped 'x')
//    // console.log(x)
// }
// // logs 10 (the outer-scoped 'x', completely untouched by the block condition)
// // console.log(x)

// // #2
// // The 'user' constant is assigned an object reference
// // const user = {
// //    name: "Fernando"
// // };

// // Properties inside the obj can be mutated/reassigned
// // user.name = "Ronald"

// // // Will log 'Ronald' (the reassigned property value)
// // console.log(user.name)

// // Question 3
// // 'var a' is hoisted to the top scope, 
// // but initialized as 'undefined'
// console.log(b); // logs undefined

// // 'a' is assigned the value 10 here
// var b = 10;

// // var a;         // Hoisted to the top with value 'undefined'
// // console.log(a); // Logs 'undefined'
// // a = 10;        // Assignment stays in place

// // Question #4
// // 'c' is hoisted, but resides in the Temporal Dead Zone (TDZ)
// // until initialized
// // console.log(c); // ReferencError: Cannot access 'c' before initialization

// // 'c' is initialized here
// let c = 10;

// // Question #5
// // Function declarations are fully hoisted,
// // allowing 'foo()' to be called before its actual place
// // in the code
// // foo();
// // The function declaration is lifted to the top
// // of the scope during memory creation
// // function foo() { // Fully hoisted
// //    console.log("Hello")
// // }


// // Question #6
// // Because foo is declared with const,
// // it's in Temporal Dead Zone until initialization
// // foo();
// // Not callable before initialization
// const foo = function () {
//    console.log("Hello")
// }

// // Question #7
// // Function is defined, accepting two parameters
// function add(a, b) {
//    // Returns the sum of param 'a' and param 'b'
//    return a + b;
// }
// // Invoke the function to get the output of 5:
// console.log(add(2, 3)); // Output 5

// // Question #8 — Parameters vs. arguments
// // Function is defined, accepting one parameter
// function greet(name) {
//    // Return template literal string embedding the 'name' parameter
//    return `Hello, ${name}`;
// }
// // Calls the function; returns "Hello, Fernando"
// // (wrap in console.log() to print to terminal)
// console.log(greet('Fernando')); // Logs: "Hello, Fernando"

// // Question 9 — return
// // Function is defined to demonstrate early return behavior
// function test() {
//    console.log("A"); // Logs: "A"
//    return;          // Exits the function immediately, returning undefined
//    console.log("B"); // Unreachable code: never executes because it comes after 'return'
// }
// // Only returns "A"
// // test();

// // Question 10 — Scope
// // Variable 'x' is declared in the global scope and assigned 10
// let x = 10;

// // Function defines a local scope
// function test() {
//   // A new variable 'x' is scoped inside 'test', shadowing the global 'x'
//   let x = 20;
//   console.log(x); // Logs: 20 (local 'x')
// }

// test();          // Calls the function, executing the log above (Logs: 20)
// console.log(x);  // Logs: 10 (global 'x', remaining completely unchanged)

// // Question 11 — Closures
// // 'outer' creates a parent scope containing 'count'
// function outer() {
//   let count = 0;

//   // Inner function retains access to 'count' even after 'outer' finishes (Closure)
//   return function() {
//     count++;      // Increments the preserved 'count' variable
//     return count; // Returns the updated value
//   };
// }

// // 'outer()' executes and returns the inner function,
// // creating a persistent closure around 'count'
// const counter = outer();

// console.log(counter()); // Logs: 1 (count increments from 0 to 1)
// console.log(counter()); // Logs: 2 (count increments from 1 to 2 using the same closure state)

// // Question #12 — Higher-order functions
// // Created a variable with an array of nums
// // const nums = [1, 2, 3]
//    // Created a second variable called doubled,
//    // mapped the array to return the nums in a new array multiplied by 2
// // const doubled = nums.map(num => num * 2);

// // console.log(doubled); // Output = [2, 4, 6]

// // Question #13 — map() vs forEach()
// // What's the main difference?

// // A) map() returns a new array; forEach() does not /// My answer

// // B) forEach() returns a new array; map() does not
// // C) They always return the same thing
// // D) map() only works with numbers

// // Question #14 — filter()
//    // Create an variable with an array of numbers
// // const nums = [1, 2, 3, 4, 5];

//    // Create a variable named result, in which the nums will be filtered,
//    // and return a new array of numbers greater than 2
// // const result = nums.filter(num => num > 2);

// // console.log(result); // Output = [3, 4, 5]

// // Question #15 — reduce()
//    // Create a variable with an array of numbers
// const nums = [1, 2, 3, 4];
//    // Create a variable named result, use the reduce to accumulate
//    // each array element into a running total, starting at 0
// const result = nums.reduce((total, num) => total + num, 0);

// // console.log(result) // Log: 10

// // Question 16 — Objects
// // Creates an object with properties representing a user
// // const user = {
// //   name: "Fernando",
// //   age: 40,
// //   sex: "male"
// // };

// // // Accesses and logs the value of the 'sex' property using dot notation
// // console.log(user.sex); // Logs: "male"

// // Question 17 — Destructuring

// // Here is the quick breakdown of what JavaScript does behind the scenes on that exact line:
// // const: Creates a brand-new, read-only local variable.
// // { name }: Tells JavaScript, "Look for a key matching the word name inside the source object."
// // = user: Points to the target object (user) from which to pull that property.
// // It is a shorthand equivalent to writing:
// // const name = user.name;

// // Creates an object with name and age properties
// // const user = {
// //   name: "Karl",
// //   age: 40
// // };
// // // Uses object destructuring to extract the 'name' 
// // // property into a standalone variable
// // const { name } = user;

// console.log(name); // Logs: "Fernando"

// // Question #18 — Destructuring
// const player = {
//    name: "Fernando",
//    age: 40
// }

// const { age } = player;

// console.log(age)

// // // A) "age"
//       // B) 40 // My answer
// // C) undefined
// // D) Error

// // Question #19 — Array destructuring
// // Declares an array containing three color strings
// const colors = ["red", "blue", "green"];

// // Uses array destructuring to extract elements by their position (index)
// // 'first' gets colors[0] ("red") and 'second' gets colors[1] ("blue")
// const [first, second] = colors;

// // Accesses and logs the value stored in 'second'
// console.log(second); // Logs: "blue"

// // A) "red"
//       // B) "blue" // My Answer
// // C) "green"
// // D) undefined

// // Question #20 — Spread operator
// // Declares an array with three initial number elements
// const units = [1, 2, 3];

// // Uses the spread operator (...) to copy all elements from 'units' 
// // into a brand-new array, appending 4 at the end
// const newUnits = [...units, 4];

// // Accesses and logs the newly created array
// console.log(newUnits); // Logs: [1, 2, 3, 4]

// // A) [1, 2, 3]
// // B) [4, 1, 2, 3]
//       // C) [1, 2, 3, 4] // My answer
// // D) Error

// // Question #21 — Rest parameter
// // The rest parameter (...numbers) gathers all passed 
// // arguments into a single array: [1, 2, 3]
// function sum(...numbers) {
//    // .reduce() iterates through [1, 2, 3],
//    // accumulating elements into a single sum starting at 0
//    return numbers.reduce((total, num) => total + num, 0);
// }

// // Calls sum() with arguments 1, 2, and 3; returns and logs 6
// console.log(sum(1, 2, 3)); // Output: 6
// // A) 3
// // B) 6 My answer
// // C) [1, 2, 3]
// // D) Error

// // Question #22 — === vs ==
// // Strict equality (===) checks both value AND data type.
// // Number vs String are different types, so this returns false.
// console.log(5 === "5"); // Logs: false

// // Loose equality (==) performs type coercion before comparing.
// // Converts the string "5" to the number 5, so this returns true.
// console.log(5 == "5");  // Logs: true
// // A) true / true
// // B) false / false
// // C) false / true  // My answer
// // D) true / false

// // Question #23 — Truthy / Falsy
// // Arrays are objects in JS; all objects (even empty ones) are truthy
// console.log(Boolean([])); // Logs: true

// // Objects (even empty ones with no properties) are truthy
// console.log(Boolean({})); // Logs: true

// // Empty strings have a length of 0 and evaluate to falsy
// console.log(Boolean("")); // Logs: false

// // A) false / false / false
// // B) true / true / false // My answer
// // C) true / false / true
// // D) false / true / false

// //Empty arrays [] and objects {} are truthy. Empty strings "" are falsy.

// // Question #24 — null vs undefined
// // Variable declared without an assigned value defaults to 'undefined'
// let a;

// // Variable explicitly assigned the value 'null' (intentional absence of value)
// let d = null;

// // Logs 'undefined' because 'a' has no value set
// console.log(a); // Logs: undefined

// // Logs 'null' because 'd' was explicitly set to null
// console.log(d); // Logs: null

// // A) null / undefined
// // B) undefined / null // My answer
// // C) null / null
// // D) undefined / undefined

// // Question #25 — Scope + closure
// // A function can access variables from its outer scope.
// // Variable declared in the global scope
// // let m = 10;

// // function test() {
// //    // Accesses 'm' from its outer (global) scope via lexical scoping
// //    console.log(m);
// // }

// // // Executes test(), printing the value of 'm'
// // test(); // Logs: 10

// // A) undefined
// // B) 10 // My answer
// // C) ReferenceError
// // D) null

// // Question #26 — this
// // Creates a user object with a 'name' property and a 'greet' method
// // const user = {
// //    name: "Mike",
// //    lastName: "Flog",
// //    greet() {
// //       // 'this' refers to the object that called the method — here, 'user'
// //       console.log(this.lastName);
// //    }
// // };

// // Calls the greet method on the 'user' object
// // user.greet(); // Logs: "Mike"

// // Question #27 — Arrow functions + this
// // const user = {
// //   name: "Fernando",
// //   // Arrow functions DO NOT get their own 'this'.
// //   // 'this' is inherited from the outer scope (here, the global window/module scope),
// //   // NOT from the 'user' object!
// //   greet: () => {
// //     console.log(this.name); // 'this.name' is undefined (or empty string in browsers)
// //   }
// // };

// // user.greet(); // Logs: undefined

// // Question #28 — Promises
// // Creates a Promise that immediately resolves with the value "Hello"
// // const promise = Promise.resolve("Hello");

// // // .then() registers a callback function to handle the resolved value
// // promise.then(value => {
// //    // 'value' receives "Hello" from the resolved promise
// //    console.log(value); // Logs: "Hello"
// // });

// // A) Promise
// // B) undefined
// // C) "Hello" // My answer
// // D) Error

// // Question #29 — async/await
// // Declaring a function with 'async' automatically wraps its return value in a Promise
// // async function getData() {
// //    return "Hello"; // Equivalent to returning Promise.resolve("Hello")
// // }

// // // Calling 'getData()' returns the pending Promise object itself, not the direct string "Hello"
// // console.log(getData()); // Output: Promise {<fulfilled>: 'Hello'}

// // A) "Hello"
// // B) Promise // My answer
// // C) undefined
// // D) Error

// // Question #30 — await
// // Declares an asynchronous function, allowing the use of the 'await' keyword inside it
// async function getData() {
//   // 'await' pauses function execution until the Promise resolves, unwrapping "Hello" directly into 'result'
//   const result = await Promise.resolve("Hello");
  
//   // Logs the unwrapped string value, not the Promise object
//   console.log(result); // Logs: "Hello"
// }

// // Executes the async function
// // getData();

// // Question 31 — Event Loop
// // Executes synchronously and logs immediately
// console.log("A"); // Logs: "A" (1st)

// // Schedules the callback function in the Web APIs / Task Queue.
// // Even with a 0ms delay, it waits for the synchronous call stack to clear.
// // setTimeout(() => {
// //    console.log("B"); // Logs: "B" (3rd)
// // }, 0);

// // // Executes synchronously right after "A"
// // console.log("C"); // Logs: "C" (2nd)

// // A) A, B, C
// // B) A, C, B // My Answer
// // C) B, A, C
// // D) C, A, B

// // Question #32 — Event Loop + Promise
// // Executes synchronously (Main Call Stack)
// console.log("A"); // Logs: "A" (1st)

// Schedules callback in the Macrotask Queue (Task Queue)
// setTimeout(() => {
//   console.log("B"); // Logs: "B" (4th)
// }, 0);

// // Schedules callback in the Microtask Queue (Promise Jobs)
// Promise.resolve().then(() => {
//   console.log("C"); // Logs: "C" (3rd)
// });

// Executes synchronously (Main Call Stack)
// console.log("D"); // Logs: "D" (2nd)

// A) A, B, C, D
// B) A, D, B, C
// C) A, D, C, B // My answer
// D) A, C, D, B

// Question #33 — Coding
// Write a function that takes an array of numbers and returns
// a new array containing only the even numbers.

// Accepts an array of numbers and filters out odd values
// function getEvens(arr) {
//    // Initializes an empty array to store the filtered even numbers
//    const result = [];

//    // Loops through each element in the input array by index
//    for (let i = 0; i < arr.length; i++) {
//       // Uses the modulo operator (%) to check if the current number is divisible by 2 with no remainder
//       if (arr[i] % 2 === 0) {
//          // Appends the even number to the 'result' array
//          result.push(arr[i]);
//       }
//    }
//    // Returns the array containing only the even numbers
//    return result;
// }

// // Calls 'getEvens' with an array of numbers and logs the returned array
// console.log(getEvens([1, 2, 3, 4, 5, 6, 30])); // Output: [2, 4, 6, 30]

// // Question #34 — Rewrite it using filter()
// // Accepts an array of numbers and returns a new array containing only even numbers
// function getEvens(arr) {
//    // .filter() iterates over 'arr' and passes each element into the callback function
//    return arr.filter(function (number) {
//       // Returns true if 'number' is even, keeping it in the new array; false drops it
//       return number % 2 === 0;
//    });
// }

// // Calls 'getEvens' and logs the filtered output array
// console.log(getEvens([1, 2, 3, 4, 5, 6, 30])); // Logs: [2, 4, 6, 30]

// // Question #35 - Arrow function
// // Uses an implicit return arrow function with .filter() to extract even numbers
const onlyEvens = arr => arr.filter(number => number % 2 === 0);

console.log(onlyEvens([12, 5, 34, 21, 60, 14])); // Logs: [12, 34, 60, 14]

function evensOnly(arr) {
   return arr.filter(number => number % 2 === 0);
}

console.log(evensOnly([12, 5, 34, 21, 60, 14]))

// Question #35
// Accepts an array of numbers and returns the largest value found
function largestNum(arr) {
   // Initializes 'current' with the first element of the array as the benchmark
   let current = arr[0];

   // Loops through every element in the array starting from index 0
   for (let i = 0; i < arr.length; i++) {
      // Compares the current element with our recorded highest value
      if (arr[i] > current) {
         // Updates 'current' if a strictly larger number is found
         current = arr[i];
      }
   }
   // Returns the largest value after checking every item
   return current;
}

console.log(largestNum([3, 7, 2, 9, 4])) // Log: 9

// Pro-tip: 
// While this for loop logic is fundamental,
// modern JavaScript lets you find the maximum value instantly
// using Math.max() with the spread operator (...):
const biggestNum = arr => Math.max(...arr);

console.log(biggestNum([3, 7, 2, 9, 4])) // Log: 9

const theBigNum = arr => Math.max(...arr)
console.log(theBigNum([3, 7, 2, 9, 4, 12, 2, 8, 13, 29])) // Log: 13

// Question #36
// function secondLargest(arr) {
//    // Initialize tracking variables to the lowest possible numerical value
//    let first = -Infinity;
//    let second = -Infinity;

//    for (let i = 0; i < arr.length; i++) {
//       // Case 1: Found a new highest number
//       if (arr[i] > first) {
//          second = first;  // The old 1st place becomes 2nd place
//          first = arr[i];  // Set the new 1st place champion
//       }
//       // Case 2: Found a number between 'first' and 'second'
//       else if (arr[i] > second && arr[i] !== first) {
//          second = arr[i]; // Update 2nd place
//       }
//    }

//    return second;
// }

// console.log(secondLargest([3, 7, 2, 9, 4])); // Logs: 7

// Question 36b — Frequency Counter

// Write a function that takes an array of numbers
// and returns an object showing how many times each number appears.
// Accepts an array of numbers and counts occurrences of each unique value

// We create a function called countNumbers.
// "arr" is the parameter — it will represent the array we give the function.
function countNumbers(arr) { 
   // Create an empty object.
   // We will use it to keep track of how many times each number appears.
   // Keeps the count
   let returned = {}; 
 
   // Go through the array one item at a time.
   // "i" starts at 0 and increases by 1 each time.
   for (let i = 0; i < arr.length; i++) { 
      // Get the current number from the array
      // and store it in a variable called "num".
      let num = arr[i]; 
 
      // Does our object already have this number?
      if (returned[num]) { 
         // YES! It already exists.
         // Add 1 to its current count.
         returned[num] += 1; 
      } else { 
         // NO! We haven't seen this number before.
         // Create it in the object and give it a count of 1.
         returned[num] = 1; 
      } 
   } 
 
   // Give the completed object back to whoever called the function.
   return returned; 
}
console.log(countNumbers([1, 3, 1, 1, 2, 2, 3, 3, 3]))
// {
//   1: 1,
//   2: 2,
//   3: 3
// }

// Question #37
// Initializes an array containing three numeric values
// const numz = [10, 20, 30];


// Standard for-loop:
// 1. Sets index counter 'i' to 0 (starts at the first element)
// 2. Runs as long as 'i' is less than numz.length (3)
// 3. Increments 'i' by 1 on each iteration
// for (let i = 0; i < numz.length; i++) {
//    // Accesses the array element at index 'i' and prints its value (not the index itself)
//    // Iteration 0: numz[0] -> 10
//    // Iteration 1: numz[1] -> 20
//    // Iteration 2: numz[2] -> 30
//    console.log(numz[i]);
// }

// A) 0 1 2
// B) 10 20 30 // My answer
// C) 10 30
// D) undefined

// Question #38 — if / else
const num = 7;

if (num > 5) {
   console.log("BIG");
} else {
   console.log("Small")
}

// A) Big // My answer
// B) Small
// C) 7
// D) Nothing

// Question #39 — if / else
const numb = 4;

if (numb > 5) {
      console.log("BIG");
} else {
   console.log("Small")
}

// A) Big
// B) Small // My answer
// C) 4
// D) Nothing

const numero = 5;

if (numero > 5) {
   console.log("Big")
} else if (numero === 5) {
   console.log("Exactly 5")
} else {
   console.log("Small")
}

// A) Big
// B) Exactly 5 // My answer
// C) Small
// D) Nothing

// Question #41 — Comparison operators
const numbb = 10 

console.log(num > 5);
console.log(num < 5);
console.log(num === 10);

// A) true / false / true // My answer
// B) false / true / false
// C) true / true / false
// D) false / false / true

// Question #42 — Modulo %
console.log(10 % 2);
console.log(11 % 2);

// A) 0 / 1 // My answer
// B) 1 / 0
// C) 5 / 5
// D) 2 / 1

// Question #43 — Modulo + if
const numm = 7;

if (numm % 2 === 0) {
   console.log("Even");
} else {
   console.log("Odd")
}

// A) Even
// B) Odd // My answer
// C) 7
// D) Nothing

// // Question #44
// Write a function called isEven that:

// Takes one number
// Returns true if it's even
// Returns false if it's odd
function isEven(nummb) {
   if (nummb % 2 === 0) {
      return true;
   } else {
      return false;
   }
}

// Pro tip
// function isEven(num) {
//    return num % 2 === 0;
// }

console.log(isEven(8))  // true
console.log(isEven(7))  // flase

//LEON YT CLASS #21 @2:10ish

// #45 
// create an array of TV shows Loop through and print each show to the console
let tvShows = ["Threes Company", "Gilligan's Island", "Maxwell Smart"]

tvShows.forEach( show => console.log( show ) )

// create an array of numbers
let nums = [3, 88, 15, 31, 4, 43, 6, 12, 8, 9, 13]
// return a new array of numbers that includes every even number
// from the previous array
let onlyEvenz = arr => arr.filter ( n => n % 2 === 0 )

console.log(onlyEvenz(nums))

// #46 
// Create a function that takes in an array of numbers,
// Alert the sum of the second lowest and the second highest number
// function sumSecondLowAndHigh(arr) {
//    let sorted = arr.sort((a, b) => a - b)
//    alert ( sorted[1] + sorted[ sorted.length -2] )
// }

// sumSecondLowAndHigh([4, 2, 5, 1, 3])

// #47 Objects
// let stopwatch = {} // Literal notation/created an object

// stopwatch.brand = "Nike"
// stopwatch.color = "black"
// stopwatch.shape = "round"
// stopwatch.size = "small"

// stopwatch.start = function() {
//    console.log("Startiiiing!!")
// }
// stopwatch.stop = function() {
//    console.log("Stopinnnng!")
// }
// stopwatch.sayBrand = function() {
//    console.log(stopwatch.brand)
// }

// stopwatch.tellTime(stopwatch.currenTime)

let car = {}

car.brand = "toyota"
car.make = "camry"
car.color = "Red"
car.doors = 4

car.honk = function () {
   console.log("Honk! Honk! Honk!")
}
car.speeding = function () {
   console.log("Slow down, my homie!")
}
car.autopilot = function () {
   console.log("Auto pilot has been engaged, lay back and enjoy the ride.")
}

let coffeeMaker = {} 

coffeeMaker.brand = "Mr. Coffee"
coffeeMaker.model = "The Brew Master"
coffeeMaker.cupsCapacity = 12
coffeeMaker.color = "Black"

coffeeMaker.brew = function() {
   console.log("Now brewing the world's best coffee")
}

coffeeMaker.hotPlate = function () {
   console.log("Caution: The coffee plate is scrortching hot!")
}

coffeeMaker.alarm = function () {
   console.log("Beeping, beeping, beeping, can you not hear the beep?")
}

let cars = ["Porsche", "Ferrari", "Buggati"]

cars.push("McKlaren")
cars = cars.filter( car => car !=="Porsche")

cars.forEach(car => console.log(car))

//
let fruits = ["apples", "oranges", "kiwis"]
fruits = fruits.filter(fruit => fruit !== "apples")
fruits.push("pineapples")
fruits.forEach(fruit => console.log(fruit))

//
let resorts = ["Wyndham", "Riu", "Hyatt"]

resorts.push("Holday Inn");
resorts.reverse();

resorts = resorts.filter( resort => resort !== "Hyatt")
resorts.forEach(resort => console.log(resort))

// create an array of golf club sets Loop through and print each set to the console
let golfClubs = ["TaylorMade", "Ping", "Nike"]
golfClubs.forEach(clubSet => console.log(clubSet))

// create an array of veggies Loop through and print each show to the console
let veggies = ["carrots", "peas", "potatoes"]
veggies.forEach( veggie => console.log (veggie) )

// Create a function that takes in an array of numbers,
// Alert the sum of the second lowest and the second highest number
// function sumSecondLowAndHi(arr) {
//    let sorted = arr.sort((a, b) => a - b)
//    alert ( sorted[ 1 ] + sorted[ sorted.length -2] )
// }

// sumSecondLowAndHi([4, 2, 5, 1, 3])

// Create an array of numbers
let numx = [4, 1, 42, 6, 17, 9, 10, 2]
// we create an arrow function with arr and use the filter method...
// that return a new array of numbers that includes every even number
// from the previous array
let onlyEvenzz = arr => arr.filter( n => n % 2 === 0 )
console.log(onlyEvenzz(numx)) 

let numzies = [4, 1, 420, 62, 17, 9, 110, 72]

numzies = numzies.filter(num => num % 2 === 0)
console.log(onlyEvenzz(numzies))

// function addSecondLowAndSecondHi(arr) {
//    let sorted = arr.sort((a, b) => a - b)
//    alert (sorted [1] + sorted[sorted.length - 2])
// }
// addSecondLowAndSecondHi([4, 1, 420, 6, 7, 9, 10, 720])

// Question #48 — if / else
const digit = 10

if (digit >= 10) {
   console.log("Yes")
} else {
   console.log("No")
}

// Question #48 — &&
const age = 25

if (age >= 18 && age < 65) {
   console.log("Working age")
} else {
   console.log("Under age")
}

// Question #50 — || "or"
const day = "Saturday";

if (day === "Saturday" && day === "Sunday") {
   console.log("Weekend")
} else {
   console.log("Weekday")
}

// Question #51 — ! (NOT)
const IsLoggedIn = false;

if (!IsLoggedIn) {
   console.log("Please Log in");
} else {
   console.log("Welcome to the Matrix")
}
// Output: "Please log in"

// Question #52 — Combine conditions
const nummm = 12

if (nummm > 10 && nummm < 20) {
   console.log("In range")
} else {
   console.log("Out of range")
}
// Output: "In range"

// Question #53 — for loop
for (let i = 0; i < 3; i++) {
   console.log(i);
}
// The loop starts at the ) index.

// Question #54 — Loop + array
const numbies = [5, 10, 15];

for (let i = 0; i < numbies.length; i++) {
   console.log(numbies[i])
}
// Output: 5, 10, 15