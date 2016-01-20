var powerCalc = new Calculator;
powerCalc.addMethod('*', function(a, b) {
	return a * b;
});
powerCalc.addMethod('/', function(a, b) {
	return a / b;
});
powerCalc.addMethod('**', function(a, b) {
	return Math.pow(a, b);
});

var result = powerCalc.calculate('6 / 3');
console.log( result ); // 8




function  Calculator(){
	this.metods={};
	this.calculate = function(str){
		var arr = str.split(' ');
		if(arr[1]==='+'){

			return +arr[0] + +arr[2];
		}else if(arr[1]==='-'){
			return +arr[0] - +arr[2];
		}
		for(met in this.metods){
			if(met === arr[1]){
				return this.metods[met](arr[0],arr[2]);
			}
		}

	};
	this.addMethod = function(symbol, fun ){

		this.metods[symbol] = fun;

	}
}

