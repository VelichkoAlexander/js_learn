function descendingOrder(n){
	return +(String(n).split('').sort(function(a,b){
		return b-a;
	}).join(''))
}


console.log(descendingOrder(123456789)); //987654321)