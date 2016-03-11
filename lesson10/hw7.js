/**
 *
 Write a function suffle(arr) to shuffle an array.
 */


function suffle(arr) {
	return arr.sort(function(a,b){

		return Math.random()-.5;


	});

}


console.log(suffle([1,2,3,4,5,8]));