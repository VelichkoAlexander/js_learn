
var Calculator = {
	average: function() {
			if(arguments.length){

				var sum=0;
				for(i=0;i<arguments.length;i++){
					sum +=arguments[i];
				}
				return sum/arguments.length;
			}else{
				return 0;
			}
	}
};


console.log(Calculator.average(3,4,5));