/**
 *
 * Напишите функцию которая принимает аргумент и
 * возвращает функцию которая возвращает этот
 * аргумент.
 * var idf = identityf(3);
 * console.log(idf()); // 3
 */

function identityf(a) {
	return function () {
		return a;
	}
}


var idf = identityf(1000);
console.log(idf()); // 3