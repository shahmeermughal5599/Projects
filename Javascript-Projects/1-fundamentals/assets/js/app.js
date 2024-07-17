// console.log(`1 js file working fine`);
// console.log("2 js file working fine");
// console.log("3 js file working fine");

// DATA TYPES

// There are two types of data types
// 1 - Primitive type
// 2 - Reference type / object type

// Primitive type variables

var store = "something"; // string  = text
var store = 1234; // number
var store = true; // boolean (true/false)
var store = false; // boolean (true/false)
var store = null; // (khali hai)
var store = undefined; // undefined

// console.log(storetest, "store");

// Reference type

var store1 = ["one", 123, true, false, null, undefined];
var store = {
  //key:value
  one: "one",
  two: "two",
};

// console.log(store1, "store1");
// console.log(store, "store");

var muzammilMarks = 90;
var musaddiqMarks = muzammilMarks;

musaddiqMarks = 95;

// console.log(muzammilMarks, "muzammilMarks");
// console.log(musaddiqMarks, "musaddiqMarks");

// Reference type example

var arrayOne = ["one", "two"];
// var arraytwo = arrayOne; // it will create a refrance of array One
var arraytwo = [arrayOne]; // we can remove refrence from spread operator [...]

arraytwo.push("three");

// console.log(arrayOne, "arrayOne");
// console.log(arraytwo, "arraytwo");

//we have three types of variables
//1- let
//2- const
//3- var

// function test() {

// }

// {} = scope

{
  let musaddiq_var = "working";
  // console.log(musaddiq_var, "musaddiq_var");
}

// console.log(musaddiq_var, "musaddiq_var");

const name = "Musaddiq";

// name = "hammad";

// console.log(name, "name");

function workingFunction() {
  var amountTest = 100;
  // console.log(amountTest, "amountTest");
}

// console.log(amountTest, "amountTest");
workingFunction();

// javascript is case sensitive
var some = "some 1";
var Some = "some 2 with capital S";

// console.log(some, "some");
// console.log(Some, "Some");

//naming of variables

// letters, a to z or 123 =  let test123
// underscore, = let javascript_awesome_one
// camelcase, = let javacsriptAwesomeOne
// pascal case, = let JavacsriptAwesomeOne

//Type Conversion

let testingVariable = "this is text or string";
testingVariable = 1231232;
testingVariable = new String(12344);
testingVariable = new String(true);
testingVariable = new String(false);
testingVariable = new String(new Date());

let date = new Date();
// console.log(date, "date");
// console.log(testingVariable, "testingVariable");

//Convert to number
testingVariable = new Number("2");
testingVariable = new Number(true);
testingVariable = new Number(false);
testingVariable = new Number(null);
testingVariable = new Number("Hello");
testingVariable = new Number([1, 2, 3, 4, 5]);
testingVariable = new Number({ a: 1, b: 2 });

testingVariable = parseInt("2");
testingVariable = parseFloat("2.5");

testingVariable = new Boolean("ABC"); // true
testingVariable = new Boolean(""); // false
testingVariable = new Boolean(1); // true
testingVariable = new Boolean(0); // false

// console.log(testingVariable, "testingVariable 2323");

// console methods

const arrgVariable = {
  name: "Musaddiq",
  designation: "Software Engineer",
  companyName: "Sipli Fleet",
};

// console.error(arrgVariable, "arrgVariable");
// console.info(arrgVariable, "arrgVariable");
// console.warn(arrgVariable, "arrgVariable");
// console.table(arrgVariable, "arrgVariable");

// Arthmetic Operators

testingVariable = 5 + 5;
testingVariable = 5 - 5;
testingVariable = 5 / 5;
testingVariable = 5 % 5;
testingVariable = 5 * 5;

// Math Object / Calculation Methods

testingVariable = Math.round(2.4);
testingVariable = Math.round(2.6);
testingVariable = Math.min(33, 100, 15555, 888, 999, 55555);
testingVariable = Math.max(33, 100, 15555, 888, 999, 55555);
testingVariable = Math.random() * 20 + 1;

// console.log(testingVariable, "testingVariable");

/*==================================
=            math floor            =
==================================*/
//for positive numbers
val = Math.floor(2.4); //2
val = Math.floor(2.3); //2
val = Math.floor(2.59); //2
val = Math.floor("2.3"); //2
val = Math.floor(2); //2

//for negative number
val = Math.floor(-2.4); //-3
val = Math.floor(-2.3); //-3
val = Math.floor(-2.5); //-3

/*=====  End of math floor  ======*/

//String Concatination
//string ko jorna

const firstName = "Muhammad Musaddiq";
const lastName = "Mustaqeem";

const fullName = firstName + " " + lastName; // Muhammad Musaddiq Mustaqeem

testString = "Hello, World my name is '" + fullName + " and my age' is 24";

testString = "Hello, World my name is '\n Musaddiq Mustaqeem and my age' is 24";

testString = `Hello, World my name is '\n ${fullName} and my age' is 24`;

testString = testString.concat(" new thing ", " second thing");
// testString = testString.toLowerCase();
// testString = testString.toUpperCase();
// testString = testString.includes("Hello, World");
testString = testString.replace(fullName, "Shariq Musatqeem");

function testing(parm1, parm2) {}

testing("parm1", "parm2");

// console.log(testString, "testString");

// soda lana hai ammi ka

let saman = "dahi";
// let saman2 = "dahi";
let purchased = "";

if (saman == "tomato") {
  purchased = "tomato";
} else {
  purchased = "dahi";
}

let foodpanda = "briyani";
let drink = "";

if (foodpanda == "briyani") {
  drink = "Jumbo Cold Drink";
} else if (foodpanda == "karahi") {
  drink = "lassi";
} else if (foodpanda == "zinger") {
  drink = "limca";
} else {
  drink = "water";
}

// console.log(drink, "drink");

//Array Methods

const fruits = ["Mango", "Banana", "Apple"];
fruits.push("Grapes");

let numbers = [22, 60, 10, 88, 99];

// numbers.push(2000); //Add on the end of array
// numbers.unshift(9999); //Add on the start of array
// numbers.pop(); //remove array from end
// numbers.shift(); //remove array from start
// numbers.splice(1, 1); //remove from array
// numbers.splice(1, 3); //remove from array

//ascending Order with sort method
// numbers.sort(function (x, y) {
//   return x - y;
// });

//descending Order with sort method
// numbers.sort(function (x, y) {
//   return y - x;
// });

// console.log(numbers, "numbers");
// console.log(fruits[0], "fruits");
// console.log(fruits[1], "fruits");
// console.log(fruits[2], "fruits");
// console.log(fruits.length, "fruits");

const users = [
  {
    name: "musaddiq",
    email: "musaddiqmustaqeem@gmail.com",
    status: "Active",
  },
  {
    name: "muzammil",
    email: "muzammil@gmail.com",
    status: "Active",
  },
  {
    name: "shariq",
    email: "shariq@gmail.com",
    status: "Active",
  },
];

const findMusaddiqUser = users.find(function (singleUser) {
  return singleUser.status === "Deactive";
});

const findStatusUser = users.filter(function (singleUser) {
  return singleUser.status === "Active";
});

const needModifyUserData = users.map(function (singleUser) {
  return {
    userEmail: singleUser.email,
    userName: singleUser.name,
    userStatus: singleUser.status,
  };
});

//kuch condition true hongi to true warna false
//some method will return boolean (true/false) value
const findDeactiveUser = users.some(function (singleUser) {
  return singleUser.status === "Deactive";
});

const findActiveUser = users.every(function (singleUser) {
  return singleUser.status === "Active";
});

// it will run condition
let i = 0;
while (i < 10) {
  // console.log(i, "i");
  i++;
}

do {
  // console.log(i, "i");
  i++;
} while (i < 0);

//object loop
const person = { fname: "Muhammad", lname: "Musaddiq", age: 22 };

for (let x in person) {
  //x  = object key like fname
  // console.log(x, "object key");
  // console.log(person[x], "object key");
}

// ['fname','lname','age']

const arrayOfKeys = Object.keys(person);

// console.log(arrayOfKeys, "arrayOfKeys");

// Object.keys(person).forEach(function (singleObjectKey) {
//   console.log(singleObjectKey, "singleObjectKey");
// });

arrayOfKeys.forEach(function (singleObjectKey) {
  // console.log(singleObjectKey, "singleObjectKey");
  // console.log(person[singleObjectKey], "object value");
});

// console.log(findActiveUser, "findActiveUser");

// COMPARISON

// Comparison operators are used in logical statements to
// determine equality or difference between variables or values.
const conditionVariableChecking = "8";

// == EQUAL TO

// if (conditionVariableChecking == 8) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

// === EQUAL TO with type check

// if (conditionVariableChecking === 8) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

// != not equal to

// let conditionNumber = 2;
// if (conditionVariableChecking !== 2) {
//   console.log("condition is true");
// } else {
//   console.log("condition is false");
// }

// let id = 40;

// if (id < 40) {
//   console.log("Correct");
// } else {
//   console.log("In Correct");
// }

// if (id > 40) {
//   console.log("Correct");
// } else {
//   console.log("In Correct");
// }

// if (id >= 30) {
//   console.log("Correct");
// } else {
//   console.log("In Correct");
// }

// console.log(typeof conditionVariableChecking);

let id;

if (id == 101) {
  // console.log("101");
} else if (id == 102) {
  // console.log("101");
} else if (id == 103) {
  // console.log("101");
} else {
  // console.log("not match any conditions");
}

//switch case statement
const color2 = "blue";

switch (color2) {
  case "red":
    // console.log("color is red");
    break;
  case "blue":
    // console.log("color is blue");
    break;
  default:
  // console.log("color is not blue or red");
}

if (color2 == "red") {
  // console.log("color is red");
} else if (color2 == "blue") {
  // console.log("color is blue");
} else {
  // console.log("color is not blue or red");
}

let valDate;
const today = new Date();

valDate = today.getMonth() + 1;
valDate = today.getFullYear();
valDate = today.getDay();
valDate = today.getMinutes();
valDate = today.getSeconds();
valDate = today.getMilliseconds();
valDate = today.getTime();

// console.log(valDate, "valDate");

// Functions
//A function is simply a “chunk” of code that you can use
// over and over again, rather than writing it out multiple times.
// Functions enable programmers to break down or decompose a problem
//into smaller chunks, each of which performs a particular task.

function anyname() {
  // console.log("anyname function is working");
}

// Declare Function
// anyname();

// Function parameters or arguement

function fullNameTest(fName, lName) {
  // console.log(`${fName} ${lName}`);
}

// fullNameTest("Muhammad", "Musaddiq");
// fullNameTest("Hammad", "Hashmi");
// fullNameTest("Shahzaib", "S");
// fullNameTest("Hammad", "Hashmi");

// you can set default parameter in function
function fullNameDefault(fName = "Muhammad", lName = "Musaddiq") {
  // console.log(`${fName} ${lName}`);
}

// fullNameDefault(); // without parameter so it will return this ""
// fullNameDefault("Hammad", "Hashmi"); // Hammad Hashmi

// IMMIDIATLEY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// const add2 = (function (firstParam = "", lastParam = "") {
//   console.log(`${firstParam} ${lastParam}`);
// })("1st", "2nd");

const todo = {
  add: function () {
    // console.log("add todo..");
  },
  edit: function (id) {
    // console.log(`Edit todo ${id}`);
  },
  working: true,
};
// todo.add();
// todo.edit(2);

//closures

//global variables
let a = 4;
function myFunction() {
  return a * a;
}

//local variables
function myFunction2() {
  let b = 4;
  return b * b;
}

// counter function

// let counter = 0;

// function add() {
//   counter += 1;
//   return counter;
// }

// add() 1
// add() 2
// add() 3
// counter = 10000
// add() 10001

//we will create local variable
// function add() {
//   let counter = 0;
//   counter += 1;
//   return counter;
// }

// add() 1
// add() 1

//then we need closures
const add = (function () {
  let counter = 0;

  return function () {
    counter += 1;
    return counter;
  };
})();

//it's mean function k andar ak or function hoga
// add() 1
// add() 2
// add() 3

// look at window object

//WINDOW METHODS / OBJECTS / PROPERTIES

// window object is global

// window.alert("working");
// alert("working");

// console.log(window, "window");

//Propmt

// const input = propmt();

// console.log(input, "input");

// Confirm

// const confirmedChecked = confirm("Are You Sure");

// if (confirmedChecked) {
//   console.log("you have selected ok");
// } else {
//   console.log("you have selected cancel");
// }

let val22;

val22 = window.outerHeight; // browser height
val22 = window.outerWidth; // browser width

val22 = window.innerHeight; // browser inner height
val22 = window.innerWidth; // browser inner height

val22 = window.scrollY; // calculate y axis scroll
val22 = window.scrollX; // calculate x axis scroll

val22 = window.location;

val22 = window.location.host;
val22 = window.location.hostname;
val22 = window.location.port;
val22 = window.location.href;

// console.log(val22, "val22");

// navigator = browser

if (window.navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    console.log(position, "position");
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}

// redirect

// window.location.href = "https://google.com";

setTimeout(function () {
  console.log("execute this function after three seconds");
}, 3000);
