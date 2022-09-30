//how may data type are there in Javascript?

// To know the type of a JavaScript variable, we can use the typeof operator.

// ==>Primitive Data type
// 1.String
let s = 'amrit';
console.log(typeof(s)); //string
// 2.Number
let num = 23;
console.log(typeof(num)); //number
// 3.BigInt
let bigInt = 234567890123456789012345678901234567890; //number
console.log(typeof(bigInt));
// 4.Boolean
let flag = true;
console.log(typeof(flag));//boolean
// 5.Undefined
console.log(typeof(xyz)); //undefined
// 6.Null
let x = null;
console.log(typeof(x));

// ==>Non Premitive Data type
// 1.Object
let obj = {name:'amrit'}
console.log(typeof(obj))
// 2.Function
let fun = function(){
    console.log("amrit");
}
console.log(typeof(fun));









// typeof "John Doe" // Returns "string"
// typeof 3.14 // Returns "number"
// typeof true // Returns "boolean"
// typeof 234567890123456789012345678901234567890n // Returns bigint
// typeof undefined // Returns "undefined"
// typeof null // Returns "object" (kind of a bug in JavaScript)
// typeof Symbol('symbol') // Returns Symbol