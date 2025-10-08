// var vs let
// console.log(value);

// var value = 42;
// let value = 42;

// ---

// no error (bad practice)
// var value = 1;
// var value = 2;

// error
// let value = 1;
// let value = 2;

// global var (bad practice)

// value = 42;
//
// console.log(value);

// const

// const CONST_VAR = 42;

// error
// CONST_VAR = 13;

//// Data Types

// let numberValue = 42.2;
// let strValue = `Hello JS ${numberValue}`;
// let boolValue = true; // false
// let undefinedValue = undefined;
// let objectValue = {
//     value: 42,
//     type: "int"
// };
// let nullValue = null;
// let arrayValue = [];
// let functionValue = function() {
//
// };
// let nanValue = NaN;
// let infinityValue = Infinity;
//
// console.log(typeof strValue);
// console.log(typeof BlaBlaBla);
// console.log(typeof undefinedValue);
// console.log(typeof objectValue);
// console.log(typeof nullValue);
// console.log(typeof boolValue);
// console.log(typeof arrayValue);
// console.log(typeof functionValue);


//// Operators

// console.log(42 || 11);
// console.log(0 && 11);
// console.log(NaN == NaN);
// console.log("1" + 1); // 11
// console.log("1" - 1); // 0

//// Casts
// let res = Number("42") * 2;
// let boolRes = !!"";
//
// console.log(res);
// console.log(boolRes);

//// if-else; switch case

// let v = 2;
//
// if (v > 0) {
//
// } else if (v < 0) {
//
// } else {
//
// }
//
// switch (v) {
//     case 2:
//         console.log(2);
//     case 1:
//         console.log(1);
//     case 3:
//         console.log(3);
//     default:
//         console.log("default");
// }

//// Loops
// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }
//
// let obj = {
//     key1: "value1",
//     key2: "value2"
// };
//
// let arr = [1, 2, 3, 4, 5];
//
// for (const key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }
//
// for (const value of arr) {
//     console.log(value)
// }

// do
// {
//
// } while (false);
//
// while (true)
// {
//
// }

//// Functions

// console.log(isEven(10), "a", "b", "c")
//
// function isEven(a, ...rest) {
//     for (let value of rest) {
//         console.log(value);
//     }
//
//     return a % 2 == 0;
// }

// let myDelegate = function printAllArguments() // this = global
// {
//     for (let arg of arguments)
//     {
//         console.log(arg);
//     }
//     console.log(this);
// };

// myDelegate();

// myDelegate = function ()
// {
//
// };

// < --
// myDelegate = () => {
//     console.log(this);
// };
//
// myDelegate();


// Input & Output

// Output to browser
// alert("Hello JSX");
// // console.log("Hello console");
//
// let message = prompt("Enter your message: ");
//
// alert(`Your message: ${message}`);


// Strict Equals

console.log(undefined == 0);
console.log(undefined == null);
console.log(0 == null);
console.log(0 === "0");
console.log(NaN === NaN);