function sum(a){
	//console.log(arguments.length===2);
	if(arguments.length===2){
		return a+ arguments[1];
	}else{

		return function (b){
			return a+b;
		}
	}


}

console.log(sum(2,0));
console.log(sum(2)(3)); //5