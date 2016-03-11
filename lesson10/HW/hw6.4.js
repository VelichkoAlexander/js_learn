function count (str) {
	var obj ={};
	if(str.length){

		var arr = str.split('');
		for(var i=0;i<arr.length;i++){
			console.log(arr[i]);
			console.log(obj[arr[i]]);
			if(obj[arr[i]]){
				obj[arr[i]] += 1;
			}else{
				obj[arr[i]] =+ 1;
			}
		}
		return obj;
	}



	return {};
}

count('abaaaaa');
