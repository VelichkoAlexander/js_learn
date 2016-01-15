/**
 * Created by Alexandr on 13.01.2016.
 */
function find(arr, value) {
	for (var i = 0; i < arr.length-1; i++) {

		if(arr[i] === value ){
			console.log(arr[i]);
			return i;
		}


	}
	return -1;

}
var testArray = ['a', 'b', 'c', 4, 5, 6];


console.log(find(testArray, 'a'));