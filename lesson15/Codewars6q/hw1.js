/**
 * Created by Alexandr on 18.03.2016.
 */

function NamedOne(first, last) {
// -- SHOULD be changed --
	this.firstName = first;
	this.lastName = last;
	Object.defineProperty(this, "fullName", {

		get: function () {
			return this.firstName + ' ' + this.lastName;
		},

		set: function (value) {
			var split = value.split(' ');
			var fullName = this.firstName + ' ' + this.lastName;
			console.log(split.length >= 2);
			if (!(value == fullName) && split.length === 2) {
				console.log("go");
				this.firstName = split[0];
				this.lastName = split[1];
			}
		}
	});

}


var namedOne = new NamedOne("Naomi", "Wang");

namedOne.firstName = "John_sdsd";
namedOne.lastName = "Doe";
namedOne.fullName = "Schtruwwe lPeter";

// ...then...
console.log(namedOne.firstName); // -> "John Doe"K

//// -- And :
//namedOne.fullName = "Bill Smith";
//// ...then...
//namedOne.firstName // -> "Bill"
//namedOne.lastName  // -> "Smith"
//
//// -- But :
//namedOne.fullName = "Tom"; // -> no : lastName missing
//namedOne.fullName = "TomDonnovan"; // -> no : no space between first & last names
//namedOne.fullName // -> "Bill Smith" (unchanged)