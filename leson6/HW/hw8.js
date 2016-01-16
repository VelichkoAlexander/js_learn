//function getMissingElement(superImportantArray) {
//	var rightArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//	var answer=0;
//	rightArr.forEach(function (item, i, arr) {
//		//console.log(superImportantArray.indexOf(item) === -1);
//		//console.log(superImportantArray.indexOf(item));
//		if (superImportantArray.indexOf(item) === -1) {
//
//			answer = item;
//
//		}
//
//	});
//	return answer;
//}


function getMissingElement(superImportantArray) {
	return superImportantArray.reduce(function (sum, value) {return sum - value;}, 45);
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
//getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]);