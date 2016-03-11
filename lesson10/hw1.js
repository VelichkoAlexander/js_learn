/*Есть объект из чисел, строк и прочих данных.
 Необходимо его превратить в массив состоящий только из чисел или строк.
 Написать метод extractNumber или extractString,
  который будет возвращать массив. */



var obj = {
	person1Age: 20,
	person1Name: 'Ivanov',
	person2Age: 30,
	person2Name: 'Petrov',
	person3Age: 40,
	person3Name: 'Sidorov'
};

var ages = [20,30,40];
var names = ['Ivanov', 'Petrov', 'Sidorov'];

function extractNumber (obj){
	var arrResult= [];
	for(num in obj){
		if(typeof(obj[num])==='number'){
			arrResult.push(obj[num]);
		}
	}
	return arrResult;


}
function extractString (obj){
	var arrResult= [];
	for(num in obj){
		if(typeof(obj[num])==='string'){
			arrResult.push(obj[num]);
		}
	}
	return arrResult;


}

console.log(extractNumber(obj));
console.log(extractString(obj));