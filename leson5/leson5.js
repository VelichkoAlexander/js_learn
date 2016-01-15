'use strict';

var user = {
	name: 'Andrey',
	surname: 'Petrov',
	age: 30
};
var toDo = {};

function isEmpty(obj) {
	var couter = 0;

	for (var a in obj) {

		couter++;
	}

	if (couter) {
		return 'true';
	} else {
		return 'false';
	}
}

console.log(isEmpty(user));
console.log(isEmpty(toDo));
