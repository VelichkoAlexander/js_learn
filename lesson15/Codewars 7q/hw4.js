/**
 * http://www.codewars.com/kata/array-dot-prototype-dot-reverse
 */

Array.prototype.reverse = function () {

	for (var i = 0, j = this.length - 1; i < j; i++, j--) {
		var temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};


var bubu = [1, 3, 4, 5, 6];
bubu.reverse();
console.log(bubu.reverse());