// primitve datatype 
// 7 types : string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.3

const isloggedin = false 
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id === anotherid);

const bignumber = 1235678534n // BigInt
console.log(typeof bignumber) // BigInt 

// Reference (Non primitive)
// Array, Objects, Functions 

const heros = ["shaktiman", "naagraj", "dogesh"];
let myObj = {
    name:"kuber",
    age:20,
} // Objects 


// Functions
const myFunctions = function(){
    console.log("hello world");
}
