//hoisting.
//Hoisting is the default behaviour of javascript where all the variable and function declarations are moved on top.

hoistedVariable = 3;
console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized	
var hoistedVariable;


//function declarations
hoistedFunction();  // Outputs " Hello world! " even when the function is declared after calling
function hoistedFunction(){ 
  console.log(" Hello world! ");
}

// Hoisting takes place in the local scope as well
function doSomething(){
  x = 33;
  console.log(x);
  var x;
} 
doSomething()


// To avoid hoisting, you can run javascript in strict mode by using “use strict” on top of the code:
"use strict";
x = 23; // Gives an error since 'x' is not declared
var x; 


//tricky question
var name = 'amrit';
function abc(){
  console.log("name:",name);
  var name = 'bobby';
  console.log("name,",name);
}
abc();



