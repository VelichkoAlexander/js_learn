function solution(number) {
	var arr=[];
	var sum = 0;
	for (var i = 1; i < number; i++) {
		if((i%3)===0||(i%5)===0){
			arr.push(i);
			sum+=i;
		}
	}
	return sum;
}

console.log(solution(10));