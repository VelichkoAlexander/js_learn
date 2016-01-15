/**
 * Created by Alexandr on 14.01.2016.
 */

function filterRange(arr, a, b) {
	var filtredArray = [];
	for (var i = 0; i < arr.length; i++) {
		if ((a <= arr[i]) && (arr[i] <= b)) {
			filtredArray.push(arr[i]);
		}
	}
	return filtredArray;

}


var testArray = [5, 7, 4, 8, 3, 0];

console.log(filterRange(testArray, 3, 5));