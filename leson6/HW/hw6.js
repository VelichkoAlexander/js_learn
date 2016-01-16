/**
 * Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
 */

var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()'];

function unique(arr) {
	var newArr = [];
	arr.forEach(function (item, i, arr) {
			if(newArr.indexOf(item) === -1){
				newArr.push(item)
			}

	});

return newArr;


}

console.log(unique(strings));