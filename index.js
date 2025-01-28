// Start: JavaScript Fundamentals — let, const, scope

// #1
// Variable 'x' is declared and assigned the
// value of 10 in the outer/global scope
let x = 10

// 'if' condition is hardcoded to true so the block
// always excecutes
if (true) {
   // New variable 'x' is shadowed and scoped inside this block,
   // assigned 20
   let x = 20
   // logs 20 (the block scoped 'x')
   console.log(x)
}
// logs 10 (the outer-scoped 'x', completely untouched by the block condition)
console.log(x)

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
console.log(c); // ReferencError: Cannot access 'c' before initialization

// 'c' is initialized here
let c = 10;