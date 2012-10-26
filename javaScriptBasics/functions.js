/* JavaScript Functions */

// ================================================
// Arguments
/*
// function name (arguments) { action }
function sayHello (name, greeting) {
	console.log('~~~~~~~~~~~~~~~');

	if (typeof name === 'undefined') {
		return 0;
	}

	if ( typeof greeting === 'undefined') {
		greeting = 'Hello';
	}
	console.log(greeting + " World!", name);

	//return 	// undefined if does not 'return' anything
	//return "Done";
	console.log('Returning from Function:');
	return name.length;
	console.log('End of Function');
}

sayHello( 'Eric' );			// passes 'name'
sayHello( 'Eric', 'Hi' );	// passes 'name' and 'greeting'
sayHello( 'Eric' );	// passes only 'name'
sayHello();
*/

// ================================================
// Return Values
/*
console.log( sayHello("Jim") );
console.log( sayHello() );
*/

// ================================================
// Scope
/*
var color = "black";		// GLOBAL SCOPE
var number = 1;

console.log("Global Color:\t", color);
console.log("Global Number:\t", number);
//console.log("Global Shape:\t", shape);	// not defined yet
console.log("~~~~~~~~~~~~~");

function showColor () {
	var color = "green";	// NEW SCOPE

	function subColor () {
		//var color = "red";	// SHADOWING
		//color = blue			// set parent
		number = 2;				// Sets at scope above (no 'var')
		shape = 'square';		// not defined, no var = java creates GLOBAL variable
		//var shape = 'square';		// 'var' defines NEW LOCAL SCOPE VARIABLE

		// CAN PULL VARIABLE IN SCOPE ABOVE
		console.log("Sub2 Color:\t", color);
		console.log("Sub2 Number:\t", number);
		console.log("Sub2 Shape:\t", shape);
		console.log("~~~~~~~~~~~~~");
	}

	subColor();

	console.log("Sub Color:\t", color);
	console.log("Sub Number:\t", number);
	console.log("Sub Shape:\t", shape);
	console.log("~~~~~~~~~~~~~");
}

showColor();

console.log("Global Color:\t", color);
console.log("Global Number:\t", number);
console.log("Global Shape:\t", shape);
console.log("~~~~~~~~~~~~~");
*/


// ================================================
// Anonymous Functions
/*
	// Named Function
function namedFunction () {
	console.log('namedFunction was called');
	//undeclaredVariable;
}

			// Anonymous Function  (with var)
var myFunction = function () {
	console.log('myFunction was called');
};
myFunction();

console.log('~~~~~~~~~~~~~');

var callTwice = function (targetFunction) {
	targetFunction();
	targetFunction();
};
callTwice(myFunction);		// function can only take arguments so we store it in a variable (anonymous)

callTwice(namedFunction);

console.log('~~~~~~~~~~~~~');
callTwice( function newNamedFunction () {
	console.log("Hello from the anon Function =)");
	//undeclaredVar;
});


	// Private scoped function
(function tempFunction (num, name) {
	var a, b, c;
	//...
	console.log(name, 'from temp funciton', num);
})(3, 'Jello')    // (arg1,arg2) at end is same as calling tempFunction();

*/

// ================================================
// ================================================
// ================================================
// Examples

// DOM (Document Object Model)
// jQuery http://jquery.com
/*
var button = document.getElementById('action');
var input = document.getElementById('text_field');

// que Timer, Event, Action > Store in function()

button.onclick = function () {
	console.log('clicked');
}

button.onclick = function () {
	console.log('click listener');  // onClick can only hold 1 funciton thing
}

// new way, does not work in IE, but stores many
button.addEventListener('click', function () {
	console.log('other clicked listener');
	input.setAttribute('value', 'Hello World');  // sets txtBox content
});

*/










