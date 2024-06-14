// js not only front end Lang use on backend.
// develope by Brendan Eich: 1995(Google).
// v8 engine using run js code in without browser(Google Chrome, Node.js).

// ==============================================================
// variable

// const= not change const variable value.
// let = block scope variable.
// var = 
// without let, var, const you are declared variable.
// variable declare but not assign value show undefine variable.
// ==============================================================
"use strict"; // treat all code strict all newer version
// Datatypes

let name="Ajit"; //string
let age=18; //number
let isLoggedIn=false;//boolean true/false
let ad=null//standalone value
let udf; //undefine
//symbol use i uniqueness
//object

console.log(typeof null);// datatype=object
console.log(typeof(udf));// datatype=undefine

// =================================================

// * conversion

let num='22';
console.log(typeof(num)); //check datatype
console.log(typeof(Number(num))); //convert number

let numq='22adv';
let val=Number(numq)
console.log(val); //NaN not a number

let num1=undefined;
let val1=Number(num1)
console.log(val1); //null=0 not a number or undefined=NaN

//Number, Boolean, String conversion method

// ==============================================================================

/*
Type of Datatypes

A)premative

1)string
2)number
3)boolean
4)null
5)undefine
6)symbol
7)biginit

B)non premative

1)array
2)object
 


*/