/* JavaScript Foundations */

// ================================================
// Variables

var color = "red";

var myDiv = document.getElementById('myDiv');

myDiv.style.background = "blue";
myDiv.style.color = "yellow";



// ================================================
// Valid Variable Naming

// Starts with		A-Z a-z _ $
// Continues with	A-z a-z 0-9 _ $

var car = "Audi";
var CapColor = "blue";
var _myVariable = "something";
var $specialName = 1;
var a342525 = "What is this?";

// Invalid Variable Naming
	//var 3colors = "REDblueGreen";
	//var person-name = "eric";
	//var @you = 34;
	//var continue = true;



// ================================================
// null and undefined

var myVar;  //undefined is nonValue that was never defined
var myNull = null;	//defined that the variable does not have a value
/*
console.log("myVar:", typeof myVar);
console.log(typeof myVar == "undefined");
console.log(myVar == undefined);

console.log("myNull:", typeof myNull);
console.log(typeof myNull == "undefined");
console.log(myNull == undefined);
*/



// ================================================
// Scope
/*
var world = "World";

function sayHello () {
	var hello = "Hello ";

	function inner () {
		var extra = " There is more!"
		console.log( hello + world + extra );
	};

	inner();
};

sayHello();

console.log("World outside of sayHello() ->", world);
//console.log("World outside of sayHello() ->", hello);
*/



// ================================================
// Shadowing
/*
var myColor = "blue";
console.log("myColor before myFunc() ->", myColor);

function myFunc () {
	var myColor = "yellow";
	// myColor = "yellow";   // See the 'var' difference in these lines
	
		var myNumber = 42;
	//	myNumber = 42;
	console.log("myColor inside myFunc() ->", myColor);
}

myFunc();

console.log("myColor after myFunc() ->", myColor);
console.log("myNumber after myFunc() ->", myNumber);
*/



// ================================================
// Hoisting

// javaScript does NOT have "block scope"
// scope changes when defining a new function()

// ! declare Variables at the TOP of functions

function doSomething (doit) {
	var thiscolor = "blue", 
		name;

	var number;
	if(doit) {
		//   v  does not define a new variable
		var thiscolor = "red";
		number = 10;
		console.log("Color in if(){}", thiscolor, number, name);
	}
	console.log("Color after if(){}", thiscolor, number, name);

};

//doSomething(false);
//doSomething(true);







