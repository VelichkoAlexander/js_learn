function applyAll(func){
	var arr = [].slice.call(arguments,1);
	return func.apply(null, arr)
}








// Применить Math.max к аргументам 2, -2, 3
console.log( applyAll(Math.max, 2, -2, 3) ); // 3

// Применить Math.min к аргументам 2, -2, 3
console.log( applyAll(Math.min, 2, -2, 3) ); // -2