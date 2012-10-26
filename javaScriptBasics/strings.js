/* JavaScript Foundations - Strings */

// ================================================
/*
var name = "Eric";		// Simple String
console.log(name);

var name2 = 'Eric';		// Double Quote is same as Single
console.log(name2);

//var statement = 'This is Jim's sting'	//Appostrophee is not valid
var statement = "This is Eric's string";
console.log(statement);

var statement2 = 'He said "This is awesome!"';  // Quotes inside string
console.log(statement2);

var statement3 = 'He said "This is Eric\'s string"';  // Backslash char
console.log(statement3);

var path = "C:\\folder\\myfile.txt";	// Double backslashes
console.log(path);

// new line \n and tab \t
// plus has to be at the end of the line
var multiline = "This is line 1\n" + 	
		"This is line 2\n\t" + 
		"This is line 3";
console.log(multiline);
*/
// ================================================
/*
var part1 = "Hello ";
var part2 = "World!";
var whole = part1 + part2;
console.log(whole + "!!!! " + 4);
*/
// ================================================
// Methods
/*
var length = whole.length;
console.log(whole, length);

var index = whole.indexOf("World");  // "index" is zero based
console.log(index);

var index = whole.indexOf("world");  // "index" is case sensitive
console.log(index);					// can't find, returns -1

if (whole.indexOf("W") !== -1){		// "!== does not equal"
	console.log("W exists in string")
} else {
	console.log("W does not exist");
}

console.log( whole.charAt(1) );
*/
// ===============
/*
var world = whole.substr(6, 5);  // start , length
console.log(world);

console.log( whole.toLowerCase() );

console.log( whole.toUpperCase() );

console.log( whole );
*/
// ================================================
// Comparing Strings

/*
var first = "Hello";
var second = "hello";

// === compares only if of same type (string) and match
// case sensitive
if ( first === second ) {
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}

if ( first.toLowerCase === second.toLowerCase ) {
	console.log("The strings are equal");
} else {
	console.log("The strings are different");
}


function compare (a,b) {
	console.log( a + " < " + b, a < b );
	console.log( a + " <= " + b, a <= b );
	console.log( a + " > " + b, a > b );
	console.log( a + " >= " + b, a >= b );
}

compare('a','b');
compare('a','A');
compare('apples','oranges');
compare('apples','applications');
compare('hello','hello');

*/







