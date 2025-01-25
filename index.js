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
