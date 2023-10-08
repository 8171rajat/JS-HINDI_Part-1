//  Primitive

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

//  const bigNumber = 234765519358945213n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagaraj", "doga"];
let myObj = {
name: "rajat",
age: 23,
}

const myFunction = function(){
    console.log("hello world");

}

// console.log(typeof bigNumber);

// console.log(typeof myObj);

// console.log(typeof scoreValue);

// console.log(typeof heros);

// console.log(typeof myFunction);

// console.log(typeof anotherId);

// non-premitive data type ka return type hamesha object hi aata hai , 
// lakin function ka return type objectFunction aata hai  



// link to study 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// Table— typeof Operator Results

// Type of val	Result
// Undefined	"undefined"
// Null	"object"
// Boolean	"boolean"
// Number	"number"
// String	"string"
// Object (native and does not implement [[Call]])	"object"
// Object (native or host and does implement [[Call]])	"function"
// Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "Rajatkumardotcom"

let anothername = myYoutubename
anothername = "chaiourcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "Rajat@google.com"

console.log(userOne.email);
console.log(userTwo.email);
