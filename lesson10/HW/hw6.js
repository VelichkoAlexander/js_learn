function add() {
	var answ= 0;
	for (var i = 0; i < arguments.length; i++) {
		answ+=(arguments[i]*(i+1));
	}
	return answ;
}


console.log(add(3,4,5));