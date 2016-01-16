function isValidWalk(walk) {
	var arrN, arrS, arrE, arrW;
	if (walk.length === 10) {
		arrN = walk.filter(function (n) {
			return n === 'n';
		});
		arrS = walk.filter(function (s) {
			return s === 's';
		});
		arrE = walk.filter(function (e) {
			return e === 'e';
		});
		arrW = walk.filter(function (w) {
			return w === 'w';
		});
		if(arrN.length===arrS.length && arrE.length===arrW.length){
			return true;
		}
	}
	return false;
}


console.log(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));