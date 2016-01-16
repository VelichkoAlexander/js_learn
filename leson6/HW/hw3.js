/**
 * Необходимо отсортировать массив в случайном порядке используя метод sort.
 *
 *
 * */


var arr = [1, 2, 3, 4, 5];

arr.sort(function (a, b) {

	return Math.random() - .5;


});

console.log(arr);