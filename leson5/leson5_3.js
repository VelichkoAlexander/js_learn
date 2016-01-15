var salaries = {

	'junuior': 1000,
	'middle': 2500,
	'senior': 3500,
	'lead': 5000
};
function summ(obj) {
	var result = 0;
	for(var sell in obj){
		result += obj[sell];

	}
	return result;

}
console.log( summ(salaries) );