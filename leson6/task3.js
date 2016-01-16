//метод Object.keys(obj)

var user = {
	age: 30,
	name: 'Sergey'

};

var keys = Object.keys(user);

for(var i = 0;i<keys.length;i++){

	console.log( 'Field: ' + keys[i]+', ' + ' Value: ' + user[keys[i]] );

}