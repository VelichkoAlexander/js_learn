function findSum() {
	var summ = 0;

	for (var i = 0; i < arguments.length; i++) {
		if (arguments[i] < 0) {
			summ = -1;
			break;
		} else if (arguments[i] === 0 && arguments.length < 1) {
			summ = 0;
			break;
		} else {
			summ += arguments[i];
		}
	}

	return summ;

}
console.log(findSum(0, 1, 2, 4));