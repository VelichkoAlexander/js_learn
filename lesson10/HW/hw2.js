function swap(str){
 var arr= str.split('');
	var arrResult = [];
	console.log(arr);
	arr.forEach(function (item) {
		if(isUpercase(item)){
			arrResult.push(item.toLowerCase());
		}else{
			arrResult.push(item.toUpperCase());
		}
	});
	return arrResult.join('')
}

function isUpercase(a) {
	return a.toUpperCase()===a;

}
console.log(swap('CodEwArs'));