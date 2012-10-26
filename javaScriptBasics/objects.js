/* JavaScript Objects */

// ================================================
// Basic {Objects} - Data type that associates keys and values
/*
var eric = {
	name: "Eric", 
	skills: ["JavaScript", "Ruby", "WorkingOut"],
	"favorite color": "green"
};

console.log(eric.name);

eric["favorite color"] = "blue";
console.log(eric["favorite color"]);
*/


// ================================================
// Methods - Objects with Functions
/*
var eric = {
	name: "Eric", 
	skills: ["JavaScript", "Ruby", "WorkingOut"],
	"favorite color": "green",
	greet: function () {
		console.log("Hello, I am " + this.name );  
		// "this" object of JavaScript is given value when called
	}
};

var jim = {
	name: "Jim", 
	greet: eric.greet
};

console.log(eric.name);

eric["favorite color"] = "Blue";
console.log(eric["favorite color"]);

eric.greet();		// Call a funciton of an Method

eric.name = "Ericson";
eric.greet();
jim.greet();

eric["greet"]();

var jimGreet = jim.greet;	// "DeRefrenced" and lost context if not envoked as Method
jimGreet();					// lost context and bound to window


function whatIsThis () {
	console.log(this);		// 'this' is the Window when there is not context and is Global
}

whatIsThis();
*/


// ================================================
// Call & Apply Methods - of "this"

// "this" assign context to method when evoked
// ".call" takes any variable number of arguments, where first is "context"
// ".apply" takes the context first and then an Array of arguments
/*
var eric = {
	name: "Eric", 
	skills: ["JavaScript", "Ruby", "WorkingOut"],
	"favorite color": "green",
	greet: function (name, mood) {
		name = name || "You";			// if false do else, || "or" operator
		mood = mood || "good";

		console.log("Hello " + name +
					", I am " + this.name +
					" and I am in a " + mood + " mood." );  
		// "this" object of JavaScript is given value when called
	}
};

var jim = {
	name: "Jim", 
	greet: eric.greet
};

var nick = {
	name: "Nick", 
	greet: eric.greet
};

console.log(eric.name);

eric["favorite color"] = "Blue";
console.log(eric["favorite color"]);

eric.greet();				// Call a funciton of an Method

eric.name = "Ericson";
eric.greet();
jim.greet();
nick['greet']();

window.name = 'The Window';	// 'name' persists as long as window is open, 'this' is assigned to the Global window
var jimGreet = jim.greet;
jimGreet();
jimGreet.call(eric);
jimGreet.call( {name: "Anit"} );

jimGreet.apply(nick);

console.log("~~~~~~~~");
eric.greet("Ryan", "awesome");
jimGreet.call( {name: "Anit"}, "Matt", "bad" );
jim.greet.apply( nick, ["Matt", "bad"] );

console.log("~~~~~~~~");
var args = ["Michael", "happy"];
jim.greet.apply( jim, args );
*/


// ================================================
// Prototypes

// "Class"ical Obeject Oriented Programming - Inheritance

// Create Object
var personPrototype = {
	name: "Anonymous",
	greet: function (name, mood) {
		name = name || "You";
		mood = mood || "good";

		console.log("Hello " + name +
					", I am " + this.name +
					" and I am in a " + mood + " mood." );
	},
	species: "Homo Sapien"
}

// Constructor Function
// Capital "P" clarifies and indicates it is a constructor function
function Person (name) {
	this.name = name;		// Knows what its Prototype is
	return this;
}

Person.prototype = personPrototype;

jim = new Person("Jim");	// Creates new object based on Prototype

nick = new Person("Nick");












