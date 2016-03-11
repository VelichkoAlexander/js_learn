function User() {

	var firstname = '';
	var surname = '';

	this.setFirstName = function (name) {

		firstname = name;

	};
	this.setSurname = function (name) {

		surname = name;

	};

	this.getFullName = function () {

		return firstname + ' ' + surname;

	}

}


var user = new User();
user.setFirstName("Петя");
user.setSurname('Иванов');

console.log(user.getFullName());