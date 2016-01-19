function createSecretHolder(secret) {
	return {
		getSecret: function() { return secret; },
		setSecret: function(a) { secret = a; }
	};
}


var obj =  createSecretHolder(5);
console.log(obj);
console.log(obj.getSecret()); // returns 5
obj.setSecret(2);
console.log(obj.getSecret()); // returns 2