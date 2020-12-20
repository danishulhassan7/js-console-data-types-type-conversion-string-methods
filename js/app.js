document.write("Hello World");


//Variables

var name =  `Danish Ul Hassan`;
console.log(name);

var marks = 56;
console.log("Marks " + marks);

let myName = "Malik Dani";
console.log("Your name is " + myName);

myName = "34";
console.log("The value is "+ myName);

const age = 21;
console.log("Your age is "+age);

// age =22;
// console.log(age);
// app.js:21 Uncaught TypeError: Assignment to constant variable.


 let city = "Karachi";
 console.log(city);

 {
     city = "Lahore";
     console.log(city);

 }

 //JavaScript is Dynamic
 // Data Types

 //Primitive Data Types (STACK)

//  String
//  Numbers 
//  Boolean 
//  Null 
//  Undefined 
//  Symbol 


let str = "We are learning JS here ";
console.log(str + (typeof str));

let num = 454646;
let num1 = 447457.674754
console.log(num, num1 + (typeof num));

let myVar = null;
console.log(myVar+ (typeof myVar));

var mySch;
console.log(mySch+ (typeof mySch));

 //Reference Data Types (HEAP)

//  Arrays 
//  Objects Literals 
//  Functions
//  Dates 
    


let myArray = [1,2,3,4,5,6];
console.log("Array values are "+myArray + (typeof myArray));


const contactNum = {
    hamza: 03083580588,
    dani: 34953975730,
    nomi: 07968574635
}

console.log(contactNum);
