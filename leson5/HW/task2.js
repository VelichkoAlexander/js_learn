/**
 * Created by Alexandr on 14.01.2016.
 */
// Before
var image = {
	width: 100,
	height: 400,
	title: 'Cool image'
};

function multiplyNumeric(obj) {
	for (key in obj) {
		if (isNumeric(obj[key])) {
			obj[key] *= 2;
		}
	}
	console.log(obj);
}

function isNumeric(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
}


multiplyNumeric(image);

