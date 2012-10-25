/* JavaScript Foundations - Arrays */

// ================================================
// Literal Array

var x = ['some', 'extra', 'words', 'here'];
console.log(x.length);

var y = ['a string', 3, ['a subarray', 2, 3, 4], 'treehouse', function(a,b){return a+b;}];

var z = [];

// Array Constructor ! NOT PREFERED

var a = new Array(50);

// ================================================
// Getting and Setting
/*
// array indexes start at 0
// "undefined" for indexes that do not exist
var my_array = ["Hello", 42, true, function (a) {return a * 2}];

var word = my_array[0];
var answer = my_array[1];
var doubler = my_array[3];
console.log( doubler(10) );

// reassign the array, and set at different points/times of the code
my_array[1] = 144;
var new_answer = my_array[1];

//my_array[14] = "A new string";  // assigns 'undefined' to indexes inbetween
my_array[my_array.length] = "new string";  // always add to end of array
my_array[my_array.length] = "newer string";
my_array[my_array.length] = "newest string";*/

// ================================================
// Methods
/*
var my_array = [2, 3, 4];
console.log( my_array.toString() );

my_array.push(5);					// always add to end of array
console.log( my_array.toString() );

var value = my_array.pop();			// gets and removes last value
console.log( my_array.toString() );

var value2 = my_array.pop();
console.log( my_array.toString() );
*/

/*
var my_array = [2,3,4];
console.log(my_array.toString() );

my_array.unshift(1);				// adds value to the begining
console.log(my_array.toString() );

var valye = my_array.shift() ;		// removes the value from the begining
console.log(my_array.toString() );
*/

/*
var my_array = [10, 44, 32, 100, 0 , 44, 3, 4];
console.log(my_array.toString() );

my_array.sort();					// default sorts alphabetical (first char)
console.log(my_array.toString() );

									// sorts numerically
my_array.sort( function (a, b) {
	return a - b;
});
console.log(my_array.toString() );

									// random order
my_array.sort( function (a, b) {
	return Math.random() - 0.5;
});
console.log(my_array.toString() );
*/

/*
var my_array = [1, 2, 3, 4, 5];
console.log(my_array.toString() );

my_array.reverse();					// reverses index order
console.log(my_array.toString() );
*/

/*
var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x.concat( y );				// combines values of arrays
console.log(z.toString() );

z = x.concat( y, 'cat', 9, 8, 7, [1,2,3] );
console.log(z.toString() );

var my_array = [0, 1, 2, 3, 4, 5];
var result = my_array.slice( 1, 4);	// pulls section of array (start, finish)
console.log(result);

var words = ['these', 'are', 'some', 'words', true, 1.234, function (a){return a}];  
result = words.join('~');			// joins all parts of array (in between)
console.log(result);				// join calls .toString on all indexs
*/

/*
var my_array = [0, 1, 2, 3, 4, 5, 6];
console.log(my_array.toString() );

delete my_array[2];					// removes index sets to 'undefined'
console.log(my_array.toString() );


// SPLICE can ADD, REMOVE, or REPLACE
my_array.splice(2, 1);				// (index start, how many elements)
console.log(my_array.toString() );

my_array.splice(2, 0, 'num');		// (index start, elements, add)
console.log(my_array.toString() );

my_array.splice(2, 1, 'num new', '#newest');	// (index start, how many elements, replace)
console.log(my_array.toString() );
*/







