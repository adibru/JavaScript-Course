/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

// function add(a, b){
//   return a + b
// }
const add = (a, b) => a + b
let result1 = add(30,7)

// function sub(c, d){
//   return c - d
// }
const sub = (c, d) => c - d
let result2 = sub(40,3)

// function div(e, f){
//   return e / f
// }
const div = (e, f) => e / f
let result3 = div(74, 2)

// function mul(g, h){
//   return 
const mul = (g, h) => g * h
let result4 = mul(18.5,2)

// Name input
var name = prompt("What is your name?")

// Greeting function
function greeting(name){
  greet = `hello ${name}! Welcome to the SUM exercise`
  console.log(greet)
}

/* 
  TODO: create a function that console logs the result of any of the above operations.
*/
console.log(result1)
console.log(result2)
console.log(result3)
console.log(result4)