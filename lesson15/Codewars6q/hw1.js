/**
 * Created by Alexandr on 18.03.2016.
 */
function NamedOne(first, last) {
// -- SHOULD be changed --
	this.firstName = first;
	this.lastName = last;
	//this.fullName = this.firstName + ' ' + this.lastName;
	Object.defineProperty(this, "fullName", {

		get: function() {
			return this.firstName + ' ' + this.lastName;
		},

		set: function(value) {
			if(value ===)
			var split = value.split(' ');
			this.firstName = split[0];
			this.lastName = split[1];
		}
	});

}

var namedOne = new NamedOne("Naomi","Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";
// ...then...
console.log(namedOne.fullName); // -> "John Doe"K

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