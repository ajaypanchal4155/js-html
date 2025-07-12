// primitive

//7 types :string,Number,boolean,null,undefined,symbol,BigInt

const score = 100
const scoreValue = 100.3

const  isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


//reference non primitive)

//arrays,object,functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);