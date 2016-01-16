/*
 * Make the sum() function return the sum of the values in the passed in array.
 * Your solution must use the reduce() function of the built-in javascript Array object.
 * If you're not familiar with reduce(), reading over the documentation may help.
 * */

function sum(array) {
	var result = array.reduce(function (sum1, i) {

		return sum1 + i;

	}, 0);
return result;
}

var test1 = [1,2,3,4,5,6,7,8,9,10];


console.log(sum(test1));

