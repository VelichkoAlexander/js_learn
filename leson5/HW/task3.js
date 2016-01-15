/**
 * Created by Alexandr on 14.01.2016.
 */

var result = 0;
var dataArray = [];
do {

	var data = prompt('Pleas enter the number');
	if (isNumeric(data)) {
		dataArray.push(data);
	}
} while (isNumeric(data)){
	for (var i = 0; i < dataArray.length; i++) {
		result += +dataArray[i];
	}

}


function isNumeric(n) {

	return !isNaN(parseFloat(n)) && isFinite(n);
}