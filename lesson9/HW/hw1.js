function sumArgs() {

	arguments.slice  =[].slice;
	var arr = arguments.slice();
	return arr.reduce(function(a, b) {
		return a + b;
	});

}

console.log( sumArgs(1, 2, 3) ); // 6, аргументы переданы через запятую, без массива