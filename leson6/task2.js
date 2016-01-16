//сортировка функуией sort вместе со строками
'use strict';

var arr = ['колбоса', 2, 34, 1, 'колбоса', 6, 56, 33, 'сосиска', 76, 12];

arr.sort(function (a, b) {
	//if (a > b) {
	//	return 1;
	//} else if (b > a) {
	//	return -1;
	//}
	if (+a && +b) {

		return a - b;

	} else if (+b) {

		return -1;

	} else {

		return 1;
	}

});

console.log(arr);
