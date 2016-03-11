function isPangram(string){
	var str  = string.toLowerCase();
	var letters = 'abcdefghijklmnopqrstuvwxyz';
	for(var i = 0; i<letters.length;i++){
		if(str.indexOf(letters.charAt(i))== -1) {

			return false


		}
	}
	return true

}


var string = "his is not a pangram.";


console.log(isPangram(string));