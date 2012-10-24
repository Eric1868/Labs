/* JavaScript Foundations - Numbers */

// ================================================
// Literal Numbers

// Whole Numbers (int)
var a = 1,
	b = -123;

// Floating Point Numbers (float)
var c = 1.5,
	d = 123.456789;

// Operations return 'float' type

var e = 0.1,
	f = 0.2;
var result = e * f ;

//console.log( a+" * "+b+" =", a * b );
//console.log( e+" * "+f+" =", e * f );	// Rounding Error from 'float'

// ================================================

var g1 = 1000000;
var g2 = 1e6;

var g3 = 1.23E6;


var h1 = 019;	// is '19'
var h2 = 012;	// is '10' , octal (base 8) number consist of  0-7

var i = 0x10	// '0x' hex notation


// ================================================
// Parsing Numbers

var j = parseInt("197");
/*
console.log( parseInt("197") );
console.log( parseInt("012") );
console.log( parseInt("019") );		
console.log( parseInt("019", 10) );		//radix base ten

console.log( parseInt("011011", 2) );	//radix base binary
*/

var l = parseInt("there are 23 people", 10);	//NaN not a number
/*
console.log( l == l );
console.log( isNaN(l) );
*/

var m = parseFloat("Guess what 0123.456 is a strange number");

var n = parseFloat("0123.456 is a strange number"); //must start with number

// ================================================
// Operators

var o = 1 + 2 ;
var p = 1 - 2 ;
var q = 3 * 4.2 ;
var r = 15 / 10 ;

var s = 15 % 10 ;		// mod ulo , remander of 15/10

var t = 1 + 2 * 3 / 4 ; // order of operations
							// 0)   (inside)
							// 1)   * /
							// 2)   + -
var t2 = (1+2)*(3/4);

// ***Operator Precedince Table

// ================================================
// Comparisons
/*
console.log( '1 < 2 ~~' , 1 < 2 );
console.log( '1 > 2 ~~' , 1 > 2 );
console.log( '1 <= 2 ~~' , 1 <= 2 );
console.log( '1 >= 2 ~~' , 1 >= 2 );
console.log( '2 <= 2 ~~' , 2 <= 2 );
console.log( '2 >= 2 ~~' , 2 >= 2 );

console.log( '3 == 3 ~~' , 3 == 3 );
console.log( '3 === 3 ~~' , 3 === 3 );  

console.log( '3 == "3" ~~' , 3 == "3" );
console.log( '3 === "3" ~~' , 3 === "3" );  // '===' compare and of same type  ! USE THIS
console.log( '3 === parseInt("3",10) ~~' , 3 === parseInt("3",10) );

console.log( '4 != 4 ~~' , 4 != 4 );	//bang ! is NOT
console.log( '4 !== 4 ~~' , 4 !== 4 );
*/

// ================================================
// 'Math' Object  (capital M)
// type "Math" into console

var u = Math.random();
var u2 = Math.random() * 10;	// number 0~10
var u3 = Math.round( Math.random() * 100 );

var u4 = Math.round( 5.5 );		// =6 round up from .5
var u5 = Math.floor( 5.5 );		// =5 alawys round down
var u6 = Math.ceil( 5.49 );		// =6 always round up

var u7 = Math.sin( 1 );







