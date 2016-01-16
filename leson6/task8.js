/**Напишите функцию sum(...), которая возвращает сумму всех
 своих аргументов.*/

function sum() {
	var allSum = 0;
	for (var i = 0; i < arguments.length; i++) {

		allSum += arguments[i];

	}
	return allSum;
}

console.log(sum());
console.log(sum(1));
console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));