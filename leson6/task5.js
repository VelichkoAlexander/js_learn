/**
 * Напишите функцию toCamelCase(str), которая преобразует
 * строки вида «my-short-string» в «myShortString».
 * То есть, дефисы удаляются, а все слова после них получают
 * заглавную букву.
 */


function toCamelCase(str) {
	var array = str.split('-');
	for (var i = 1; i < array.length; i++) {
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	return array.join('');
}

console.log(toCamelCase('list-style-image'));