
console.log("Hello from myScript.js");
//console.log("Hello again...");				// This is not needed

// LEARNED:  Two Slash Comment

/* LEARNED:  Endless 
				Comment */

/*
124.04				< Numbers
"Hello World"		< Strings
true 				< TRUE
false 				< FALSE
alert()
prompt()
Array ()
*/

// ------------------------------------------------------------
// ------------------------------------------------------------
/*
var name = prompt("What is your name?");	// LEARNED:  This a VARIABLE
console.log("name = " + name );
alert("Hello " + name );

name = "Nick";
console.log("The user's name is now " + name );
*/
// ------------------------------------------------------------
/*
console.log("Before IF");
	var name = prompt("What is your name");

	 // LEARNED:  CONTROL STRUCTURE  if/else CONDITIONAL STATEMENTS
		// 	TRUTHY  = most
		// 	FALSEY  = false , 0 , null , undefined
	
	if (name) {
		console.log("If Block");
	} else {
		console.log("Else Block");
	}
console.log("After IF");
*/
// ------------------------------------------------------------
/*
// LEARNED:  CONTROL STRUCTURE  while LOOP
console.log("Before WHILE");

	var counter = 10;
	while (counter) {
		console.log("Hello World");
		counter = counter - 1;
	}

	while (prompt("What is your name?")) {
		console.log ("Got your name ");
	}

console.log("After WHILE");
*/
// ------------------------------------------------------------
/*
// LEARNED:  CONTROL STRUCTURE  for LOOP
console.log("Before FOR");

			// INITIALIZER:  var ; check for TRUE ; end
	for (var counter=10;counter; counter = counter - 1) {
		console.log("Hello World");
		console.log(counter);
	}
	
console.log("After FOR");
*/
// ------------------------------------------------------------
/*
// LEARNED:  array
var friends = ["Mike", "Nick", "John", "AlSon", [true, 1, null] ];		

console.log ( friends );
console.log ( friends.length );

var friendNumber = 0;			// LEARNED: INDEX values start at 0
console.log ( friends [friendNumber] + " INDEXED");	

// LEARNED:  COMPARISON OPERATOR  "<" ">" .... ?
// LEARNED:  i = i + 1   is same as   i+=1
for ( var i = 0;  i < friends.length;  i+=1 ) {
	console.log ( friends [i] );
}
*/
// ------------------------------------------------------------




console.log ( "END" );


